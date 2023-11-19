import React, { useState, useContext } from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Button, Spinner, Input } from 'native-base'

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from "@react-navigation/native";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, navContext } from "../context/propContext";

//Importo las funciones de async storage
import { deleteStorageDatos } from "../controllers/localStorageController";


const gear = <Icon name="gear" size={30} color="#88af3a" />;
const dataBase = <Icon name="database" size={30} color="#7e3af2" />;
const brief = <Icon name="briefcase" size={30} color="#0e79b2" />;
const home = <Icon name="home" size={30} color="#43880a" />;

const ListaNavegacion = () => {

    const navigation = useNavigation()
    const { setIsLoged, userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO
    const { setOpenNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    //Funcion para cerrar sesion
    const cerrarSesion = () => {
        setIsLoged(false)
        deleteStorageDatos()
        setOpenNav(false)
        navigation.navigate('Index')
    }

    return (
        <Pressable style={styles.contenedorLista} onPress={() => setOpenNav(false)}>
            <View style={styles.subContainer}>
                <View style={styles.contBotones}>
                    <Button
                        justifyContent='flex-start' pl={10} mb={1} bg='#d9eedc'
                        onPress={() => {
                            setOpenNav(false)
                            navigation.navigate('Home')
                        }}
                    >
                        <View style={styles.contBtn}>
                            {home}
                            <Text ml={3} fontSize={16} color='#43880a' fontWeight='bold'>Home</Text>
                        </View>
                    </Button>
                    <Button justifyContent='flex-start' pl={10} mb={1} bg='#efe6fd'
                        onPress={() => {
                            setOpenNav(false)
                            navigation.navigate('Abm')
                        }}
                    >
                        <View style={styles.contBtn}>
                            {dataBase}
                            <Text ml={3} fontSize={16} color='#7e3af2' fontWeight='bold'>Administración</Text>
                        </View>
                    </Button>
                    <Button justifyContent='flex-start' pl={10} mb={1} bg='#dbeafe'>
                        <View style={styles.contBtn}>
                            {brief}
                            <Text ml={3} fontSize={16} color='#0e79b2' fontWeight='bold'>Pedidos</Text>
                        </View>
                    </Button>
                    <Button justifyContent='flex-start' pl={10} mb={1} bg='#e9f3d4'
                        onPress={() => {
                            setOpenNav(false)
                            navigation.navigate('Services')
                        }}
                    >
                        <View style={styles.contBtn}>
                            {gear}
                            <Text ml={3} fontSize={16} color='#88af3a' fontWeight='bold'>Servicios</Text>
                        </View>
                    </Button>

                </View>
                <View style={styles.contSession}>
                    <Text color='gray.500' textAlign='center' fontSize={18} mb={1}>{userLogueado.username}</Text>
                    <Button
                        height={8} justifyContent='center' bg='red.400'
                        onPress={() => cerrarSesion()}
                    >
                        <Text fontSize={10} color='white' fontWeight='bold'>Cerrar Sesión</Text>
                    </Button>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    contenedorLista: {
        
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: 0,
        zIndex: 100,
        alignItems: 'flex-end',
    },
    subContainer: {
        width: '60%',
        height: 320,
        padding: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'white',
        elevation: 3,
    },
    btnCerrarSesion: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#a10000',
        borderRadius: 5,
    },
    contBotones: {
        flex: 1,
        
    },
    contBtn: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    contSession: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: '#f79a9a',
    }
})

export default ListaNavegacion;
