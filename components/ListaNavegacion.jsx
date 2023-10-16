import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Button, Spinner, Input } from 'native-base'
const ListaNavegacion = () => {
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.contenedorLista}>

            <View style={styles.contBotones}>
                <Button height={10} justifyContent='center' mb={1} >
                    <Text fontSize={12} color='white' fontWeight='bold'>Home</Text>
                </Button>
                <Button height={10} justifyContent='center' width='90%' mb={1}>
                    <Text fontSize={12} color='white' fontWeight='bold'>Usuarios</Text>
                </Button>
                <Button height={10} justifyContent='center' width='90%' mb={1}>
                    <Text fontSize={12} color='white' fontWeight='bold'>Clientes</Text>
                </Button>
                <Button height={10} justifyContent='center' width='90%' mb={1}>
                    <Text fontSize={12} color='white' fontWeight='bold'>Productos / Serv</Text>
                </Button>
                <Button height={10} justifyContent='center' width='90%' mb={1}>
                    <Text fontSize={12} color='white' fontWeight='bold'>Impuestos</Text>
                </Button>
                <Button height={10} justifyContent='center' width='90%' mb={1} >
                    <Text fontSize={12} color='white' fontWeight='bold'>Pedidos</Text>
                </Button>
            </View>

            <Button height={8} justifyContent='center' bg='red.400'>
                <Text fontSize={10} color='white' fontWeight='bold'>Cerrar Sesión</Text>
            </Button>


        </View>
    );
}

const styles = StyleSheet.create({
    contenedorLista: {
        backgroundColor: 'white',
        width: '60%',
        
        padding: 10,
        elevation: 3,
        borderBottomLeftRadius: 10,
        position: 'absolute',
        right: 0,
        zIndex: 100,
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
    }
})

export default ListaNavegacion;
