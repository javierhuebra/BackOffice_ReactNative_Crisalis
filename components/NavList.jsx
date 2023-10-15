import React, { useState, useContext } from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Button, Spinner, Input } from 'native-base'

//Con useContext le digo desde cual contexto quiero obtener los datos
import { navContext } from "../context/propContext";

const NavList = () => {
    const { openNav, setOpenNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    return (
        <View style={styles.contenedor}>
            <Pressable style={styles.presionable} onPress={()=>setOpenNav(!openNav)}>
                <Text>NavList</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,

    },
    presionable:{
        width: '100%',
        height: '100%',
    },
    contenedorLista: {
        backgroundColor: 'white',
        width: 150,
        height: 300,
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        position: 'absolute',
        zIndex: 100000,
    },
})

export default NavList;
