import { useState, useContext } from "react";
import { Modal, View, Alert } from "react-native";
import { Text, Button, Spinner, Input, useToast } from 'native-base'

//Importo estilos
import CrearUsuarioStyles from "../stylesheets/CrearUsuarioStyles";

//Importo funcion para crear usuarios
import { crearUsuario } from "../controllers/ABMuserController";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { propContext } from "../context/propContext";
import { err } from "react-native-svg/lib/typescript/xml";

const CrearUsuario = ({ openModal, setOpenModal }) => {

    const { infoApp } = useContext(propContext); //Para sacar la info de la app del context

    const URL = `${infoApp.ip}:${infoApp.port}`//Extraigo la url ya que el path esta definido en la funcion fetchusuarios

    const [isLoading, setIsLoading] = useState(false) //Para saber si esta cargando

    const toast = useToast();

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const [errores, setErrores] = useState([])
    const [formIniciado, setFormIniciado] = useState(false)

    const handleCrearUsuario = async () => {
        const validationErrors = [];
        setFormIniciado(false);
        if (usuario === '' || password === '') {
            validationErrors.push('Ambos campos son obligatorios.');
        }

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

    return (
        <Modal
            animationType='fade'
            visible={openModal}
            transparent={true}
        >
            <View style={CrearUsuarioStyles.container}>
                <View style={CrearUsuarioStyles.contenido}>
                    <Text fontSize='xl' fontWeight='bold' textAlign='center' color='#3E5117'>Ingresando usuario al sistema</Text>
                    {
                        isLoading
                            ?
                            <Spinner size='lg' color='#173251' />
                            :
                            <View style={CrearUsuarioStyles.form}>
                                <View>
                                    <Text fontWeight='bold' textAlign='center'>Correo Electrónico</Text>
                                </View>
                                <Input
                                    placeholder="Email"
                                    backgroundColor='#FFF'
                                    marginBottom={5}
                                    onChangeText={text => setUsuario(text.toLowerCase())}
                                />
                                <Text fontWeight='bold' textAlign='center'>Contraseña</Text>
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    backgroundColor='#FFF'
                                    marginBottom={5}
                                    onChangeText={text => setPassword(text)}
                                />
                                {
                                    errores.length > 0 && formIniciado 
                                    &&
                                    errores.map((err,index) => <Text key={index} color='red.500' textAlign='center'>{err}</Text>
                                    )
                                }
                                <Button
                                    backgroundColor='#0E79B2'
                                    mb='3'
                                    onPress={() => handleCrearUsuario()}
                                >
                                    <Text color='white' fontWeight='bold' fontSize={18}>Crear Usuario</Text>
                                </Button>
                                <Button
                                    backgroundColor='red.800'
                                    onPress={() => {
                                        setOpenModal(false)
                                        setFormIniciado(false)
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