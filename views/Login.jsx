import { useState, useContext, useEffect } from "react";
import { View, Alert, Image } from "react-native";
import { Input, Text, Button, useToast, Spinner } from "native-base";
import { useNavigation } from "@react-navigation/native";

//Para decodificar base64
import { atob } from 'react-native-quick-base64';

//Con useContext le digo desde cual contexto quiero obtener los datos
import { propContext, userContext } from "../context/propContext";

//Importo las funciones dde async storage
import { saveStorageDatos } from "../controllers/localStorageController";

//Importo los estilos
import LoginStyles from "../stylesheets/LoginStyles";
import GlobalStyles from "../stylesheets/GlobalStyles";


const Login = () => {
    const { infoApp } = useContext(propContext); //Es una constante que contiene los datos del contexto

    const { isLoged, setIsLoged, setUserLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO

    const [usuario, setUsuario] = useState('')//Esto podria ser un unico estado con un objeto pero me es comodo asi
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)//Para mostrar el loading

    const URL = `${infoApp.ip}:${infoApp.port}/login`//Extraigo del contexto la ip y el puerto que viene del servidor de desarrollo

    const navigation = useNavigation()//Para moverse entre pantallas

    const toast = useToast();



    //Funcion para enviar el formulario de
    const handleSubmit = async () => {
        if (usuario === '' || password === '') {
            Alert.alert('Ambos los campos son obligatorios!', 'Por favor complete todos los campos.')
        } else {
            const loginDTO = { //Aca se mapea con la forma de javascript que no hace falta poner los dos puntos email: email, password: password, porque se llaman igual
                usuario,
                password
            }

            try {
                setLoading(true)
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(loginDTO)
                })

                if (response.ok) {
                    const responseData = await response.json()//Se parsea de json porque es un objeto
                    setLoading(false)
                    console.log(responseData)

                    toast.show({ description: `¡Autenticado correctamente ${responseData.username}!` })

                    
                    const token = responseData.token.split(".")[1] //Saco la parte del medio del token que es la que me interesa
                    const paddedToken = token + '==='.slice((token.length + 3) % 4); // Me tiraba un error que no cumplia con la longitud o algo asi, le pongo relleno para que no tire error
                    const decodedToken = atob(paddedToken); //Lo decodifico
                    const claims = JSON.parse(decodedToken); //Lo parseo a json
                    
                    const roles = JSON.parse(claims.authorities).map((rol) => rol.authority) //Obtengo los roles del usuario

                    console.log(claims)

                    let isUser = false
                    let isTecnico = false
                    roles.forEach((rol) => {
                        rol === 'ROLE_USER' && (isUser = true)
                        rol === 'ROLE_TECNICO' && (isTecnico = true)
                    })

                    const infoConRoles = { ...responseData, isAdmin: claims.isAdmin, isUser, isTecnico }
                    //console.log(infoConRoles)

                    //saveStorageDatos(responseData)//Guardo los datos en el storage
                    //setUserLogueado(responseData)//Guardo los datos en el contexto

                    saveStorageDatos(infoConRoles)//Guardo los datos en el storage
                    setUserLogueado(infoConRoles)//Guardo los datos en el contexto

                    setIsLoged(true)//Guardo los datos en el contexto
                    /* navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                      }); */
                    navigation.replace('Home')
                    navigation.navigate('Home')
                } else {
                    const responseData = await response.text()//Si la respuesta no es ok me manda un string, por eso no se puede parsear a json
                    if (response.status == 404) {
                        console.log(responseData)
                        //Alert.alert('Error:', `${responseData}`)
                        Alert.alert(`Error ${response.status}`, `Credenciales inválidas`)
                        setLoading(false)
                    } else {
                        //console.log(responseData)
                        console.log(response.status)
                        Alert.alert(`Error ${response.status}`, `Usuario no disponible`)
                        setLoading(false)
                    }
                }
            } catch (error) {
                console.error("Error al enviar la solicitud: ", error)
            }
        }
    }

    useEffect(() => {
        console.log('USE EFFECT LOGIN')
        if (isLoged) {
            navigation.replace('Home')
            navigation.navigate('Home')
        }

    }, [])

    return (
        <View style={GlobalStyles.container}>
            <View style={LoginStyles.secondContainer}>
                <Image source={require('../assets/images/logo.png')
                } alt="logo imagen" style={LoginStyles.logo} />
                <View style={LoginStyles.form}>

                    <Text fontWeight='bold' textAlign='center'>Usuario</Text>
                    {
                        loading
                            ?
                            <Spinner color="blue.500" />
                            :
                            <>
                                <Input

                                    placeholder="correo@dominio.com"
                                    backgroundColor='#FFF'
                                    marginBottom={5}
                                    onChangeText={text => setUsuario(text)}
                                />
                                <Text fontWeight='bold' textAlign='center'>Contraseña</Text>
                                <Input

                                    placeholder="********"
                                    type="password"
                                    backgroundColor='#FFF'
                                    marginBottom={5}
                                    onChangeText={text => setPassword(text)}
                                />
                                <Button
                                    bg='denim.100'
                                    onPress={() => handleSubmit()}
                                >
                                    <Text color='white' fontWeight='bold' fontSize={18}>Iniciar Sesión</Text>
                                </Button>
                            </>
                    }


                </View>
            </View>
        </View>
    );
}

export default Login;