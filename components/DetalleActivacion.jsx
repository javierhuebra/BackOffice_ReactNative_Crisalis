import React, { useState, useEffect, useContext } from 'react';
import { Modal, View, Alert } from 'react-native'
import { Text, Button, Input, useToast } from "native-base";
import CrearUsuarioStyles from '../stylesheets/CrearUsuarioStyles';


//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, propContext } from "../context/propContext";
import { cambiarEstadoSuscripcion } from '../controllers/SuscripcionesController';

const DetalleActivacion = ({ openModal, setOpenModal, suscripcion }) => {
    const { setIsLoged, isLoged, userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO
    const { infoApp } = useContext(propContext); //Para sacar la info de la app del context

    const toast = useToast();
    const URL = `${infoApp.ip}:${infoApp.port}`//Extraigo la url 

    const [isLoading, setIsLoading] = useState(false) //Para saber si esta cargando



    const handleDesactivar = (id) => {
        Alert.alert(
            "Cambiar estado de sucripcion",
            "¿Está seguro que desea cambiar el estado de suscripción?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Cambiar",
                    onPress: () => {
                        cambiarEstadoSuscripcion(URL,id,userLogueado).then(() => {
                            setOpenModal(false)
                            toast.show({
                                description: "Estado de suscripción cambiado",
                                
                                duration: 1000,
                                
                            })
                        })
                    }
                }
            ],
            { cancelable: false }
        );
    
    }


    useEffect(() => {


    }, [])

    return (
        <Modal
            animationType='fade'
            visible={openModal}
            transparent={true}
        >
            <View style={CrearUsuarioStyles.container}>
                <View style={CrearUsuarioStyles.contenido}>

                    <Text fontSize='xl' fontWeight='bold' textAlign='center' color='#628f07' mb={5}>Detalle de suscripción</Text>

                    <View style={CrearUsuarioStyles.form}>
                        <View>
                            <Text fontSize='md' fontWeight='bold' color='#000000'><Text color='#7a8df8'>Fecha de contratación:</Text> {suscripcion.fecha}</Text>
                            <Text fontSize='md' fontWeight='bold' color='#000000'><Text color='#7a8df8'>Tipo de cliente:</Text>
                                {
                                    suscripcion.empresa ? ' Empresa' : ' Particular'
                                }
                            </Text>
                            {
                                suscripcion.empresa &&
                                <Text fontSize='md' fontWeight='bold' color='#000000'><Text color='#7a8df8'>Nombre de la empresa:</Text> {suscripcion.empresa}</Text>
                            }
                            <Text fontSize='md' fontWeight='bold' color='#000000'><Text color='#7a8df8'>Titular:</Text> {suscripcion.persona}</Text>
                            <Text fontSize='md' fontWeight='bold' color='#000000'><Text color='#7a8df8'>Servicio:</Text> {suscripcion.servicio}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                {
                                    suscripcion.estado ?
                                        <>
                                            <Text mr={5} fontSize='md' fontWeight='bold' color='#32a852'><Text color='#7a8df8'>Estado:</Text> Activo</Text>
                                            <Button
                                                bg='red.400'
                                                onPress={() => handleDesactivar(suscripcion.id)}
                                                flex={1}

                                            >
                                                <Text color='white' fontWeight='bold' fontSize={18}>DESACTIVAR</Text>
                                            </Button>
                                        </>
                                        :
                                        <>
                                            <Text mr={5} fontSize='md' fontWeight='bold' color='#a83232'><Text color='#7a8df8'>Estado:</Text> Inactivo</Text>
                                            <Button
                                                bg='green.400'
                                                onPress={() => handleDesactivar(suscripcion.id)}
                                                flex={1}

                                            >
                                                <Text color='white' fontWeight='bold' fontSize={18}>ACTIVAR</Text>
                                            </Button>
                                        </>
                                }
                                

                            </View>
                        </View>



                        <Button
                            bg='red.800'
                            mt={5}
                            onPress={() => {
                                setOpenModal(false)

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

export default DetalleActivacion;