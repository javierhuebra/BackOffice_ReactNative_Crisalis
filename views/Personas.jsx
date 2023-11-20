import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, Pressable } from "react-native";
import { Text, Input, Button, Spinner } from "native-base";

import GlobalStyles from "../stylesheets/GlobalStyles";
import UsersStyles from "../stylesheets/UsersStyles";


//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, propContext, navContext } from "../context/propContext";

import ListaNavegacion from "../components/ListaNavegacion";

import Icon from 'react-native-vector-icons/FontAwesome';
import { deletePersona, fetchPersonas } from "../controllers/ABMpersonController";
import { fetchUsuarios } from "../controllers/ABMuserController";
import CrearPersona from "../components/CrearPersona";

const person = <Icon name="child" size={20} color="#ffffff" />;
const close = <Icon name="close" size={30} color="#af3a3a" />;
const pencil = <Icon name="pencil" size={30} color="#cebf37" />;
const check = <Icon name="check" size={30} color="#88af3a" />;
const Personas = () => {
    const { setIsLoged, isLoged, userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO
    const { infoApp } = useContext(propContext); //Para sacar la info de la app del context
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    const URL = `${infoApp.ip}:${infoApp.port}`//Extraigo la url 

    const [openModal, setOpenModal] = useState(false)

    const [personas, setPersonas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    //Para crear la persona o editar
    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        dni: '',
    })

    const handleDeleteElement = async (id) => {
        //console.log(id)
        
        await deletePersona(URL, id, userLogueado)
            .then(() => {
                fetchPersonas(URL, 0, setIsLoading, userLogueado)
                    .then((data) => {
                        data.sort((a, b) => {
                            if (a.apellido < b.apellido) {
                                return -1;
                            }
                            if (a.apellido > b.apellido) {
                                return 1;
                            }
                            return 0;
                        });
                        //console.log(data)
                        setPersonas(data)
                    })
            })
    }

    useEffect(()=> {
        fetchPersonas(URL, 0, setIsLoading, userLogueado)
        .then((data) => {
            data.sort((a, b) => {
                if (a.apellido < b.apellido) {
                    return -1;
                }
                if (a.apellido > b.apellido) {
                    return 1;
                }
                return 0;
            });
            console.log(data)
            setPersonas(data)
        })
    },[openModal])

    return (
        <>
            {openNav && <ListaNavegacion />}
            <View style={[GlobalStyles.containerClaro, {backgroundColor:'#efe6fd'}]}>
                <CrearPersona
                    openModal={openModal}
                    setOpenModal={setOpenModal}

                    persona={persona}
                    setPersona={setPersona}
                />
                
                <View style={GlobalStyles.contSecundario}>
                <View style={UsersStyles.contHeader}>
                        <View style={UsersStyles.barraBusqueda}>
                            <Input
                                variant="rounded"
                                placeholder="Buscar por usuario"
                                
                            />
                        </View>
                        <Button
                            width='40%'
                            bg='denim.100'
                            onPress={() => setOpenModal(true)}
                        >
                            <Text fontWeight='bold' color='white'>{person} Crear Persona</Text>
                        </Button>
                    </View>
                    <ScrollView style={UsersStyles.scrollUsers}>
                        <View style={UsersStyles.tabla}>
                            <View style={[UsersStyles.fila, UsersStyles.filaHeader]}>
                                <View style={[UsersStyles.col, UsersStyles.colMail]}>
                                    <Text fontWeight='bold'>Nombre</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold'>DNI</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold'>Estado</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold'>Acciones</Text>
                                </View>
                            </View>
                            {
                                isLoading
                                    ?
                                    <Spinner />
                                    :
                                    <>
                                        {

                                            personas.map((persona) => (
                                                    <View key={persona.id} style={UsersStyles.fila}>
                                                        <View style={[UsersStyles.col, UsersStyles.colMail]}>
                                                            <Text textTransform='capitalize'>{persona.nombre} {persona.apellido}</Text>
                                                        </View>
                                                        <View style={[UsersStyles.col]}>
                                                            <Text>{persona.dni}</Text>
                                                        </View>
                                                        <View style={[UsersStyles.col,{alignItems:'center', justifyContent:'center'}]}>
                                                            {
                                                                persona.eliminado
                                                                    ?
                                                                    <Text fontWeight='bold' color='red.500'>Inactivo</Text>
                                                                    :
                                                                    <Text fontWeight='bold' color='green.500'>Activo</Text>
                                                            }
                                                        </View>
                                                        <View style={[UsersStyles.col, UsersStyles.colAcciones]}>
                                                            <Pressable
                                                                style={UsersStyles.accionContainer}
                                                                onPress={() => handleDeleteElement(persona.id)}
                                                            >

                                                                {
                                                                    persona.eliminado
                                                                        ?
                                                                        <>{check}</>
                                                                        :
                                                                        <>{close}</>
                                                                }

                                                            </Pressable>
                                                            <Pressable style={UsersStyles.accionContainer} onPress={() => console.log('hola')}>
                                                                <>{pencil}</>

                                                            </Pressable>
                                                        </View>
                                                    </View>


                                                ))
                                        }
                                    </>
                            }
                            

                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
}

export default Personas;