import { useState, useContext, useEffect } from "react";
import { Modal, View, Alert } from "react-native";
import { Text, Button, Spinner, Input, useToast } from 'native-base'

//Importo estilos
import CrearUsuarioStyles from "../stylesheets/CrearUsuarioStyles";

//Importo funcion para crear usuarios
import { crearUsuario, modifyUsuario } from "../controllers/ABMuserController";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { propContext, userContext } from "../context/propContext";

//Importo las funciones de async storage
import { deleteStorageDatos } from "../controllers/localStorageController";

import { useNavigation } from "@react-navigation/native";


const CrearUsuario = ({
    openModal,
    setOpenModal,
    usuario: usuarioObj,
    setUsuario: setUsuarioObj
}) => {

    const { infoApp } = useContext(propContext); //Para sacar la info de la app del context

    const URL = `${infoApp.ip}:${infoApp.port}`//Extraigo la url ya que el path esta definido en la funcion fetchusuarios

    const { setIsLoged, userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO

    const [isLoading, setIsLoading] = useState(false) //Para saber si esta cargando

    const navigation = useNavigation()

    const toast = useToast();

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');



    const [errores, setErrores] = useState([])
    const [formIniciado, setFormIniciado] = useState(false)

    //Funcion para cerrar sesion
    const cerrarSesion = () => {
        setIsLoged(false)
        deleteStorageDatos()
        navigation.navigate('Index')
    }

    const handleCrearUsuario = async () => {
        const validationErrors = [];
        setFormIniciado(false);
        if (Object.keys(usuarioObj).length == 0)
            if (usuario === '' || password === '') {
                validationErrors.push('Ambos campos son obligatorios.');
            }

        if (Object.keys(usuarioObj).length == 0)
            if (password.length < 4 || password.length > 15) {
                validationErrors.push('La contraseña debe estar entre 4 y 15 caracteres.');
            }



        if (!/\S+@\S+\.\S+/.test(usuario)) {
            validationErrors.push('El usuario debe ser un email válido.');
        }


        if (validationErrors.length > 0) {
            console.log(validationErrors);
            setErrores(validationErrors);
            setFormIniciado(true);
            return;
        }

        if (Object.keys(usuarioObj).length > 0) {
            try {
                await modifyUsuario(URL, usuarioObj.id, usuario, password, setIsLoading)
                    .then(() => {

                        toast.show({ description: "¡Usuario modificado!" })

                        setUsuario('')
                        setPassword('')
                        setUsuarioObj({})
                        setOpenModal(false)

                        usuarioObj.id === userLogueado.id 
                        &&
                        cerrarSesion()
                        
                    })
            } catch {
                Alert.alert(
                    "Error del servidor",
                    "No se pudo modificar el usuario",
                );
            }



        } else {
            const response = await crearUsuario(URL, usuario, password, setIsLoading)
                .then((data) => {
                    console.log("data: ", data.status)
                    if (data.ok) {
                        toast.show({ description: "¡Usuario creado correctamente!" })
                    } else {
                        Alert.alert(
                            "Error del servidor",
                            "No se pudo crear el usuario",
                        );
                    }
                    setUsuario('')
                    setPassword('')
                    setOpenModal(false)
                })
            console.log(response)
        }



    }
    useEffect(() => {
        console.log('USE EFFECT CREAR USUARIO')
        //console.log(usuarioObj)
        if (Object.keys(usuarioObj).length > 0) setUsuario(usuarioObj.usuario)
        //console.log("usuarioooooooooooooooooooooo: ", usuarioObj)

    }, [usuarioObj])

    return (
        <Modal
            animationType='fade'
            visible={openModal}
            transparent={true}
        >
            <View style={CrearUsuarioStyles.container}>
                <View style={CrearUsuarioStyles.contenido}>
                    {
                        Object.keys(usuarioObj).length > 0
                            ?
                            <Text fontSize='xl' fontWeight='bold' textAlign='center' color='#bcce58'>Editando usuario</Text>
                            :
                            <Text fontSize='xl' fontWeight='bold' textAlign='center' color='#3E5117'>Ingresando usuario al sistema</Text>
                    }

                    {
                        isLoading
                            ?
                            <Spinner size='lg' color='#173251' />
                            :
                            <View style={CrearUsuarioStyles.form}>
                                <View>
                                    <Text fontWeight='bold' textAlign='center'>Usuario</Text>
                                </View>
                                <Input
                                    placeholder="usuario@domionio.com"
                                    backgroundColor='#FFF'
                                    marginBottom={5}
                                    value={usuario}
                                    onChangeText={text => setUsuario(text.toLowerCase())}
                                />
                                <Text fontWeight='bold' textAlign='center'>Contraseña</Text>
                                <Input
                                    placeholder="********"
                                    type="password"
                                    backgroundColor='#FFF'
                                    marginBottom={5}
                                    onChangeText={text => setPassword(text)}
                                />
                                {
                                    errores.length > 0 && formIniciado
                                    &&
                                    errores.map((err, index) => <Text key={index} color='red.500' textAlign='center'>{err}</Text>
                                    )
                                }
                                <Button
                                    bg='denim.100'
                                    mb='3'
                                    onPress={() => handleCrearUsuario()}
                                >
                                    {
                                        Object.keys(usuarioObj).length > 0
                                        ?
                                        <Text color='white' fontWeight='bold' fontSize={18}>Editar Usuario</Text>
                                        :
                                        <Text color='white' fontWeight='bold' fontSize={18}>Crear Usuario</Text>
                                    }
                                    
                                </Button>
                                <Button
                                    bg='red.800'
                                    onPress={() => {
                                        setOpenModal(false)
                                        setFormIniciado(false)
                                        setUsuarioObj({})
                                        setUsuario('')
                                        setPassword('')
                                    }
                                    }
                                >
                                    <Text color='white' fontWeight='bold' fontSize={18}>Cancelar</Text>
                                </Button>
                            </View>
                    }
                </View>

            </View>

        </Modal>
    );
}


export default CrearUsuario;