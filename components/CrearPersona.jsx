import React, { useState, useEffect, useContext } from 'react';
import { Modal, View, Alert } from 'react-native'
import { Text, Button, Input, useToast } from "native-base";
import CrearUsuarioStyles from '../stylesheets/CrearUsuarioStyles';
import { crearPersona } from '../controllers/ABMpersonController';

//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, propContext } from "../context/propContext";

const CrearPersona = ({ openModal, setOpenModal, persona, setPersona }) => {
    const { setIsLoged, isLoged, userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO
    const { infoApp } = useContext(propContext); //Para sacar la info de la app del context
    
    const toast = useToast();
    const URL = `${infoApp.ip}:${infoApp.port}`//Extraigo la url 

    const [isLoading, setIsLoading] = useState(false) //Para saber si esta cargando
    const [formOk, setFormOk] = useState(false) //Para saber si el formulario esta ok

    const handleForm = (inputName, inputValue) => {
        setPersona({
            ...persona,
            [inputName]: inputValue,
        }); 
    };

    const handleCreatePersona = async (persona) => {
        //console.log(id)
        
        await crearPersona(URL, persona, setIsLoading, userLogueado)
            .then((resp) => {
                console.log(resp)
                setPersona({
                    nombre: '',
                    apellido: '',
                    dni: '',
                })
                setOpenModal(false)
                if(resp.ok){
                    toast.show({ description: "¡Persona creada correctamente!" })
                }else{
                    Alert.alert('Error', 'No se pudo crear la persona.')
                }
            })
    }

    useEffect(() => {
        const isValid = persona.nombre.length >= 2 && persona.apellido.length >= 2 && persona.dni.length === 8;
        setFormOk(isValid);
        
    }, [persona])

    return (
        <Modal
            animationType='fade'
            visible={openModal}
            transparent={true}
        >
            <View style={CrearUsuarioStyles.container}>
                <View style={CrearUsuarioStyles.contenido}>

                    <Text fontSize='xl' fontWeight='bold' textAlign='center' color='#3E5117'>Ingresando persona al sistema</Text>

                    <View style={CrearUsuarioStyles.form}>
                        <View>
                            <Text fontWeight='bold' textAlign='center'>Nombre</Text>
                        </View>
                        <Input
                            placeholder="Juan"
                            type="text"
                            backgroundColor='#FFF'
                            marginBottom={5}
                            value={persona.nombre}
                            onChangeText={text => handleForm('nombre', text)}
                        />
                        <Text fontWeight='bold' textAlign='center'>Apellido</Text>
                        <Input
                            placeholder="Doe"
                            type="text"
                            backgroundColor='#FFF'
                            marginBottom={5}
                            value={persona.apellido}
                            onChangeText={text => handleForm('apellido', text)}
                        />
                        <Text fontWeight='bold' textAlign='center'>DNI</Text>
                        <Input
                            placeholder="35456987"
                            type="text"
                            backgroundColor='#FFF'
                            marginBottom={5}
                            value={persona.dni}
                            onChangeText={text => handleForm('dni', text)}
                        />

                        <Button
                            bg='denim.100'
                            mb='3'
                            onPress={() => handleCreatePersona(persona)}
                            isDisabled={!formOk}
                        >
                            <Text color='white' fontWeight='bold' fontSize={18}>CREAR PERSONA</Text>
                        </Button>

                        <Button
                            bg='red.800'
                            onPress={() => {
                                setOpenModal(false)
                                setPersona({
                                    nombre: '',
                                    apellido: '',
                                    dni: '',
                                })
                            }
                            }
                        >
                            <Text color='white' fontWeight='bold' fontSize={18}>CANCELAR</Text>
                        </Button>
                    </View>

                </View>
            </View>

        </Modal>
    );
}

export default CrearPersona;