import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Button, Spinner, Input } from 'native-base'
const ListaNavegacion = () => {
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.contenedorLista}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    contenedorLista: {
        backgroundColor: 'white',
        width: 180,
        height: 250,
        padding: 10,
        elevation: 3,
        borderBottomLeftRadius: 10,
        position: 'absolute',
        right: 0,
        zIndex: 100,
    },
})

export default ListaNavegacion;
