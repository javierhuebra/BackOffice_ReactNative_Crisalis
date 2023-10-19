import React, { useEffect, useContext } from "react";

import { View, Image, Pressable } from "react-native";
import { Text, Button, Center } from 'native-base'
import { useNavigation } from "@react-navigation/native";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, navContext } from "../context/propContext";

//Importo las funciones de async storage
import { deleteStorageDatos } from "../controllers/localStorageController";

//Importo estilos globales
import GlobalStyles from "../stylesheets/GlobalStyles";

//Importo estilos
import HomeStyles from "../stylesheets/HomeStyles";

import Icon from 'react-native-vector-icons/FontAwesome';

import ListaNavegacion from "../components/ListaNavegacion";

const gear = <Icon name="gear" size={30} color="#88af3a" />;
const dataBase = <Icon name="database" size={30} color="#7e3af2" />;
const brief = <Icon name="briefcase" size={30} color="#0e79b2" />;

const Home = () => {
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

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
        <View style={[GlobalStyles.containerClaro, { backgroundColor: 'white' }]}>
            {openNav && <ListaNavegacion />}
            <View style={HomeStyles.container}>

                <View style={HomeStyles.contImg}>
                    <Image source={require('../assets/images/logoLetras.png')
                    } alt="Alternate Text" style={HomeStyles.image} />
                </View>



                <Text fontSize={25} fontWeight='bold' textAlign='center' mb={3}>Diseñado para equipos empresariales</Text>
                <Text fontSize={16} textAlign='center' color='gray.400' mb={3}>
                    En Crisalis nos centramos en mercados en los que la tecnología,
                    la innovación y el capital pueden generar valor a largo plazo e impulsar el crecimiento económico.
                </Text>
                <Pressable
                    style={[HomeStyles.intBtn, {backgroundColor:'#efe6fd'}]}
                >
                    <View style={HomeStyles.contBtnInt}>
                        {dataBase}
                        <Text fontSize={18} color='#7e3af2' ml={3} fontWeight='bold'>Alta, Baja y Modificación</Text>
                    </View>
                    <Icon name="chevron-right" size={30} color="#936fd1"/>
                </Pressable>
                <Pressable
                    style={[HomeStyles.intBtn, {backgroundColor:'#dbeafe'}]}
                >
                    <View style={HomeStyles.contBtnInt}>
                        {brief}
                        <Text fontSize={18} color='#0e79b2' ml={3} fontWeight='bold'>Pedidos</Text>
                    </View>
                    <Icon name="chevron-right" size={30} color="#5590af"/>
                </Pressable>
                <Pressable
                    style={[HomeStyles.intBtn, {backgroundColor:'#e9f3d4'}]}
                >
                    <View style={HomeStyles.contBtnInt}>
                        {gear}
                        <Text fontSize={18} color='#88af3a' ml={3} fontWeight='bold'>Servicios</Text>
                    </View>
                    <Icon name="chevron-right" size={30} color="#88af3a"/>
                </Pressable>

                <Button
                    mb='5'
                    borderRadius={50}
                    onPress={() => navigation.navigate('Users')}
                >
                    <Text color='white' fontWeight='bold' fontSize={18}>USERS</Text>
                </Button>
                <Button
                    mb='5'
                    borderRadius={50}
                    onPress={() => cerrarSesion()}
                >
                    <Text color='white' fontWeight='bold' fontSize={18}>LOG OUT</Text>
                </Button>
            </View>
        </View>
    );
}


export default Home;