import React, { useState, useEffect, useContext } from "react";

import { Modal, View, StyleSheet, Pressable } from "react-native";
import { Text, CloseIcon, Button, Spinner } from "native-base";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { propContext } from "../context/propContext";

//Importo estilos
import EndPointsStyles from "../stylesheets/EndoPointsStyles";



const EndPoints = ({ modalVisible, setModalVisible, leerDatos }) => {
    const { infoApp, isLoading } = useContext(propContext); //Es una constante que contiene los datos del contexto

    useEffect(() => {
        console.log('Se ejecuto el useEffect del EndPoints')
    }, [])

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
            transparent={true}
        >
            <View style={EndPointsStyles.container}>
                <View style={EndPointsStyles.contenido}>

                    <View style={EndPointsStyles.header}>
                        <Text fontSize="2xl">Propiedades</Text>
                        <Pressable
                            onPress={() => setModalVisible(false)}
                        >
                            <CloseIcon size={5} />
                        </Pressable>
                    </View>

                    <View style={EndPointsStyles.body}>
                        <Text  bg='white' color='red.500'>
                            Esta aplicación se encuentra en desarrollo, por lo que la ip del servidor puede cambiar.
                        </Text>
                        <Text fontWeight='bold'>
                            Mediante una base de datos no relacional llamada <Text color='yellow.500'>Firebase</Text> que se encuentra en la nube online en todo momento
                            (y actúa como microservicio) se controla la configuración inicial de la app como ip, estado, publicidades, etc.
                        </Text>
                        <Text>
                            Los cambios se actualizan automaticamente pero 
                            tambien puede constatar que la app esté actualizada  
                            realizando un refetching manual.
                        </Text>

                        <View>
                            <View style={EndPointsStyles.tabla}>
                                {
                                    Object.keys(infoApp).length === 0
                                        ?
                                        <Text textAlign='center' color='red.500'>
                                            No se pudo obtener la configuracion del
                                            servidor de desarrollo.
                                        </Text>
                                        :
                                        <View>
                                            {
                                                isLoading
                                                    ?
                                                    <Spinner
                                                        accessibilityLabel="Loading posts"
                                                        size="lg"
                                                        color="blue.500"
                                                    />
                                                    :
                                                    <>
                                                        <View style={EndPointsStyles.fila}>
                                                            <Text>Servidor:</Text>
                                                            <Text>{infoApp.name}</Text>
                                                        </View>
                                                        <View style={EndPointsStyles.fila}>
                                                            <Text>IP del servidor:</Text>
                                                            <Text>{infoApp.ip}</Text>
                                                        </View>
                                                        <View style={EndPointsStyles.fila}>
                                                            <Text>Puerto:</Text>
                                                            <Text>{infoApp.port}</Text>
                                                        </View>
                                                        <View style={EndPointsStyles.fila}>
                                                            <Text>Estado de la app:</Text>
                                                            {
                                                                infoApp.activa
                                                                    ?
                                                                    <Text color='green.700'>ACTIVA</Text>
                                                                    :
                                                                    <Text color='red.700'>INACTIVA</Text>
                                                            }
                                                        </View>
                                                        <View style={[EndPointsStyles.fila, EndPointsStyles.autores]}>
                                                            <Text>Autor:</Text>
                                                            <Text>{infoApp.autor}</Text>
                                                        </View>
                                                    </>
                                            }



                                        </View>


                                }

                            </View>
                        </View>


                        <Button
                            marginTop={3}
                            onPress={() => leerDatos()}
                        >
                            Refetch
                        </Button>
                    </View>
                </View>
            </View>

        </Modal >
    );
}



export default EndPoints;