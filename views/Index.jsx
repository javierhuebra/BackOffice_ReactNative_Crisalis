import React, { useState, useEffect, useContext } from "react";
import {
    View,
    StyleSheet,
    Alert,
    Image,
    Dimensions,
    Pressable,
    ScrollView,
    ImageBackground
} from "react-native";
import { Button, Center, Spinner, Text } from 'native-base'

//Importo useNavigation para la navegación
import { useNavigation } from "@react-navigation/native";

//Importo los estilos de este componente
import IndexStyles from "../stylesheets/IndexStyles";
import GlobalStyles from "../stylesheets/GlobalStyles";

//Importo componentes
import EndPoints from "../components/EndPoints";

//Metodos firebase
import { getDoc, doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { propContext, userContext } from "../context/propContext";


const Index = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [imagenesSlider, setImagenesSlider] = useState({})
    const {
        infoApp,
        setInfoApp,
        isLoading,
        setIsLoading,
        loaded,
        setLoaded
    } = useContext(propContext); //Es una constante que contiene los datos del contexto

    const { isLoged, setIsLoged, setUserLogueado, userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO

    const navigation = useNavigation()

    //Leer los datos de configuracion
    const leerDatos = async () => {
        //console.log('Leyendo datos...')

        // Indicar que estás en proceso de carga
        setIsLoading(true);

        const configRef = doc(db, "configuracion", "info-app");
        try{
            const docSnap = await getDoc(configRef);

            if (docSnap.exists()) {
                //console.log("Datos cargados en el contexto:", docSnap.data());
    
                //Guardo los datos en el contexto
                setInfoApp(docSnap.data());
    
                //Convierto el objeto de imagenes para poder iterarlo
                const imagenes_snap = Object.entries(docSnap.data().imagenes)
    
                //Algoritmo par ordenar 
                imagenes_snap.sort((a, b) => {
                    if (a < b) {
                        return -1
                    }
                    if (a > b) {
                        return 1
                    }
                })
    
    
                setImagenesSlider(imagenes_snap)
    
                //console.log('Imagenes ordenadas:', imagenesSlider)
                setLoaded(true);
                setIsLoading(false);
    
    
    
            } else {
                // docSnap.data() va a ser undefined en este caso
                //console.log("No such document!");
    
                setIsLoading(false);
            }
        }catch(err){
            console.log(err)
            setIsLoading(false);
        }
        
    }

    useEffect(() => {
        console.log('Se ejecuto el useEffect del index')
        leerDatos()
    }, [])

    return (
        <View style={GlobalStyles.container}>
            <EndPoints
                leerDatos={leerDatos}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            <View style={IndexStyles.contModalEndpoints}>
                <Pressable
                    onPress={() => setModalVisible(true)}
                    style={IndexStyles.pressableEndpoints}
                >
                    <Image
                        style={IndexStyles.engineeIcon}
                        source={require('../assets/images/engine.png')}
                    />
                </Pressable>
            </View>

            {
                isLoged &&
                <View style={IndexStyles.contUserLogueado}>
                    <Text fontSize='xl'>{userLogueado.usuario}</Text>
                </View>
            }

            <Image
                style={IndexStyles.imagenEncabezado}
                source={{ uri: 'https://academia.finneg.com/pluginfile.php/1/theme_moove/logo/1694006580/logo_academia_510px.png' }}
            />


            <Image
                style={IndexStyles.imagen}
                source={require('../assets/images/logoColor.png')}
            />

            {/* Aca van las imagenes dinamicas, es una prueba para ver como queda, se controlan desde firebase */}

            <View style={IndexStyles.contenedorImgBtn1}>

                <View style={IndexStyles.ScrollView}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}

                    >
                        {
                            isLoading || !loaded ? <Text>Cargando publicidades...</Text> :
                                //Debo convertir el objeto en un array para poder iterarlo
                                imagenesSlider?.map(([index, value]) => (
                                    <View key={index} style={IndexStyles.cardHor}>
                                        <ImageBackground source={{ uri: value[1] }} resizeMode="cover" style={IndexStyles.imgBackground}>
                                            <Text color='white' fontSize='3xl' fontWeight='bold'>{value[0]}</Text>
                                        </ImageBackground>
                                    </View>
                                ))
                        }


                    </ScrollView>
                </View>





                {
                    Object.keys(infoApp).length === 0 || isLoading
                        ?
                        <Center>
                            <Spinner
                                accessibilityLabel="Loading posts"
                                size="lg"
                                color="blue.500"
                            />
                            <Text>Cargando configuración</Text>
                        </Center>
                        :
                        <View style={IndexStyles.contBotones}>
                            <Button
                                width={130}
                                elevation={2}
                                bg='denim.100'
                                onPress={() => navigation.navigate('Info')}
                            >
                                <Text style={IndexStyles.textBtn}>Info</Text>
                            </Button>
                            {
                                infoApp.activa
                                    ?
                                    <>
                                        {
                                            isLoged ?
                                            <Button
                                                width={130}
                                                bg='denim.100'
                                                elevation={2}
                                                onPress={() => navigation.navigate('Home')}
                                            >
                                                <Text style={IndexStyles.textBtn}>Home</Text>
                                            </Button>
                                            :
                                            <Button
                                                width={130}
                                                bg='denim.100'
                                                elevation={2}
                                                onPress={() => navigation.navigate('Login')}
                                            >
                                                <Text style={IndexStyles.textBtn}>Ingresar</Text>
                                            </Button>
                                        }
                                    </>

                                    :
                                    <Button
                                        width={130}

                                        onPress={() => Alert.alert(`La app ha sido desactivada por el administrador`)}
                                        backgroundColor='red.500'
                                        
                                        opacity={0.8}
                                    >
                                        <Text style={IndexStyles.textBtn}>Inactiva</Text>
                                    </Button>
                            }

                        </View>
                }
            </View>

        </View>
    );
}

export default Index;