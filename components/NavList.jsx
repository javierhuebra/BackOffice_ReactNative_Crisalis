import React, { useState, useContext } from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Button, Spinner, Input, HamburgerIcon } from 'native-base'

//Con useContext le digo desde cual contexto quiero obtener los datos
import { navContext } from "../context/propContext";

const NavList = () => {
    const { openNav, setOpenNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    return (
        <View style={styles.contenedor}>
            <Pressable style={styles.presionable} onPress={() => setOpenNav(!openNav)}>
                <HamburgerIcon size='10' />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        paddingHorizontal: 5,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#dbdbdb',

    },
    presionable: {
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
