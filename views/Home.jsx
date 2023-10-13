import React, { useEffect, useContext } from "react";

import { View, StyleSheet } from "react-native";
import { Text, Button } from 'native-base'
import { useNavigation } from "@react-navigation/native";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext } from "../context/propContext";

//Importo las funciones de async storage
import { deleteStorageDatos } from "../controllers/localStorageController";

const Home = ({ route }) => {
    const { setIsLoged } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO

    const navigation = useNavigation()

    //Funcion para cerrar sesion
    const cerrarSesion = () => {
        setIsLoged(false)
        deleteStorageDatos()
        navigation.navigate('Index')
    }

    useEffect(() => {
        console.log('USE EFFECT HOME')

    }, [])

    return (
        <View style={styles.contenedor}>
            <Text>Home - Logueado</Text>
            <Button
                mb='5'
                borderRadius={50}
                onPress={() => cerrarSesion()}
            >
                <Text color='white' fontWeight='bold' fontSize={18}>LOG OUT</Text>
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        backgroundColor: 'lightblue',
        padding: 5
    }
})

export default Home;