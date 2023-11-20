import React, { useEffect, useContext, useState } from "react";

import { View, ScrollView, Pressable, Alert } from "react-native";
import { Text, Button, Spinner, Input, CloseIcon, ThreeDotsIcon, CheckIcon } from 'native-base'

//Importo para la navegación
import { useNavigation } from "@react-navigation/native";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, propContext, navContext } from "../context/propContext";

//Importo estilos globales
import GlobalStyles from "../stylesheets/GlobalStyles";

//Importo la funcion de fetchusuarios
import { fetchUsuarios, deleteUsuario } from "../controllers/ABMuserController";

import Icon from 'react-native-vector-icons/FontAwesome';

import UsersStyles from "../stylesheets/UsersStyles";
import ListaNavegacion from "../components/ListaNavegacion";
import CrearUsuario from "../components/CrearUsuario";


const close = <Icon name="close" size={30} color="#af3a3a" />;
const pencil = <Icon name="pencil" size={30} color="#cebf37" />;
const check = <Icon name="check" size={30} color="#88af3a" />;
const user = <Icon name="user" size={20} color="#ffffff" />;


const Users = () => {
    const { setIsLoged, isLoged, userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO
    const { infoApp } = useContext(propContext); //Para sacar la info de la app del context
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    const URL = `${infoApp.ip}:${infoApp.port}`//Extraigo la url ya que el path esta definido en la funcion fetchusuarios

    const [usuarios, setUsuarios] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    const [searchTerm, setSearchTerm] = useState('')//Para buscar en la tabla de usuarios

    const [usuario, setUsuario] = useState({})

    const navigation = useNavigation()

    const handleClickedElement = async (id) => {
        //console.log(id)
        if (id === userLogueado.id) {
            Alert.alert('Error', 'No puede eliminar su propio usuario.')
            return
        }
        await deleteUsuario(URL, id, userLogueado)
            .then(() => {
                fetchUsuarios(URL, 0, setIsLoading, userLogueado)
                    .then((data) => {
                        //console.log(data)

                        data.sort((a, b) => {
                            if (a.usuario < b.usuario) {
                                return -1;
                            }
                            if (a.usuario > b.usuario) {
                                return 1;
                            }
                            return 0;
                        });

                        setUsuarios(data)
                    })
            })
    }

    const handleEditElement = (objetoUsuario) => {
        setOpenModal(true)
        setUsuario(objetoUsuario)
    }

    useEffect(() => {
        console.log('USE EFFECT USERS')
        //console.log(isLoged)
        //console.log(URL)
        //console.log(fetchUsuarios(URL, 0, setIsLoading).then((data) => console.log(data)))

        fetchUsuarios(URL, 0, setIsLoading, userLogueado)
            .then((data) => {
                //console.log(data)

                data.sort((a, b) => {
                    if (a.usuario < b.usuario) {
                        return -1;
                    }
                    if (a.usuario > b.usuario) {
                        return 1;
                    }
                    return 0;
                });

                setUsuarios(data)
            })


    }, [openModal])

    return (
        <>
            {openNav && <ListaNavegacion />}
            <View style={[GlobalStyles.containerClaro, {backgroundColor:'#efe6fd'}]}>

                <CrearUsuario
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    usuario={usuario}
                    setUsuario={setUsuario}
                />
                <View style={UsersStyles.contenido}>
                    <View style={UsersStyles.contHeader}>
                        <View style={UsersStyles.barraBusqueda}>
                            <Input
                                variant="rounded"
                                placeholder="Buscar por usuario"
                                value={searchTerm}
                                onChangeText={text => { setSearchTerm(text) }}
                            />
                        </View>
                        <Button
                            width='40%'
                            bg='denim.100'
                            onPress={() => setOpenModal(true)}
                        >
                            <Text fontWeight='bold' color='white'>{user} Crear Usuario</Text>
                        </Button>
                    </View>
                    <ScrollView style={UsersStyles.scrollUsers}>
                        <View style={UsersStyles.tabla}>
                            <View style={[UsersStyles.fila, UsersStyles.filaHeader]}>
                                <View style={[UsersStyles.col, UsersStyles.colMail]}>
                                    <Text fontWeight='bold'>Usuario</Text>
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

                                            usuarios
                                                .filter((usuario) =>
                                                    usuario.usuario.toLowerCase().includes(searchTerm.toLowerCase())
                                                ).map((usuario) => (
                                                    <View key={usuario.id} style={UsersStyles.fila}>
                                                        <View style={[UsersStyles.col, UsersStyles.colMail]}>
                                                            <Text>{usuario.usuario}</Text>
                                                        </View>
                                                        <View style={UsersStyles.col}>
                                                            {
                                                                usuario.eliminado
                                                                    ?
                                                                    <Text fontWeight='bold' color='red.500'>Inactivo</Text>
                                                                    :
                                                                    <Text fontWeight='bold' color='green.500'>Activo</Text>
                                                            }
                                                        </View>
                                                        <View style={[UsersStyles.col, UsersStyles.colAcciones]}>
                                                            <Pressable
                                                                style={UsersStyles.accionContainer}
                                                                onPress={() => handleClickedElement(usuario.id)}
                                                            >

                                                                {
                                                                    usuario.eliminado
                                                                        ?
                                                                        <>{check}</>
                                                                        :
                                                                        <>{close}</>
                                                                }

                                                            </Pressable>
                                                            <Pressable style={UsersStyles.accionContainer} onPress={() => handleEditElement(usuario)}>
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


export default Users;