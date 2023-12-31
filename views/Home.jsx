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
    const { userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO
    const navigation = useNavigation()


    useEffect(() => {
        console.log('USE EFFECT HOME')

    }, [])

    return (
        <>
            {openNav && <ListaNavegacion />}
            <View style={[GlobalStyles.containerClaro]}>

                <View style={HomeStyles.contImg}>
                    <Image source={require('../assets/images/logoLetras.png')
                    } alt="Alternate Text" style={HomeStyles.image} />
                </View>
                <View style={HomeStyles.container}>


                    <Text fontSize={25} fontWeight='bold' textAlign='center' mb={3}>Diseñado para equipos empresariales</Text>
                    <Text fontSize={16} textAlign='center' color='gray.400' mb={3}>
                        En Crisalis nos centramos en mercados en los que la tecnología,
                        la innovación y el capital pueden generar valor a largo plazo e impulsar el crecimiento económico.
                    </Text>
                    {
                        (userLogueado.isAdmin || userLogueado.isUser) &&
                        <>
                            <Pressable
                                style={[HomeStyles.intBtn, { backgroundColor: '#efe6fd' }]}
                                onPress={() => navigation.navigate('Abm')}
                            >
                                <View style={HomeStyles.contBtnInt}>
                                    {dataBase}
                                    <Text fontSize={18} color='#7e3af2' ml={3} fontWeight='bold'>Administración</Text>
                                </View>
                                <Icon name="chevron-right" size={30} color="#936fd1" />
                            </Pressable>
                            <Pressable
                                style={[HomeStyles.intBtn, { backgroundColor: '#dbeafe' }]}
                                onPress={() => navigation.navigate('Pedidos')}
                            >
                                <View style={HomeStyles.contBtnInt}>
                                    {brief}
                                    <Text fontSize={18} color='#0e79b2' ml={3} fontWeight='bold'>Pedidos</Text>
                                </View>
                                <Icon name="chevron-right" size={30} color="#5590af" />
                            </Pressable>
                        </>
                    }

                    <Pressable
                        style={[HomeStyles.intBtn, { backgroundColor: '#e9f3d4' }]}
                        onPress={() => navigation.navigate('Services')}
                    >
                        <View style={HomeStyles.contBtnInt}>
                            {gear}
                            <Text fontSize={18} color='#88af3a' ml={3} fontWeight='bold'>Servicios</Text>
                        </View>
                        <Icon name="chevron-right" size={30} color="#88af3a" />
                    </Pressable>

                </View>
            </View>
        </>
    );
}


export default Home;