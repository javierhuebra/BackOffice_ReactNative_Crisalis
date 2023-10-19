import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Button, Spinner, Input } from 'native-base'

import Icon from 'react-native-vector-icons/FontAwesome';



const gear = <Icon name="gear" size={30} color="#88af3a" />;
const dataBase = <Icon name="database" size={30} color="#7e3af2" />;
const brief = <Icon name="briefcase" size={30} color="#0e79b2" />;

const ListaNavegacion = () => {
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.contenedorLista}>

            <View style={styles.contBotones}>
                <Button height={10} justifyContent='center' mb={1} >
                    <Text fontSize={12} color='white' fontWeight='bold'>Home</Text>
                </Button>
                <Button  justifyContent='center' mb={1} bg='#efe6fd'>
                    <View style={styles.contBtn}>
                        {dataBase}
                        <Text ml={3} fontSize={16} color='#7e3af2' fontWeight='bold'>ABM</Text>
                    </View>
                </Button>
                <Button  justifyContent='center' mb={1} bg='#dbeafe'>
                    <View style={styles.contBtn}>
                        {brief}
                        <Text ml={3} fontSize={16} color='#0e79b2' fontWeight='bold'>Pedidos</Text>
                    </View>
                </Button>
                <Button  justifyContent='center' mb={1} bg='#e9f3d4'>
                    <View style={styles.contBtn}>
                        {gear}
                        <Text ml={3} fontSize={16} color='#88af3a' fontWeight='bold'>Servicios</Text>
                    </View>
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
    },
    contBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        
    }
})

export default ListaNavegacion;
