import React, { useEffect, useContext, useState, Fragment } from "react";

import { View, ScrollView } from "react-native";
import { Text, Button, Spinner, Input, CloseIcon, ThreeDotsIcon, CheckIcon } from 'native-base'

//Importo para la navegación
import { useNavigation } from "@react-navigation/native";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, propContext, navContext } from "../context/propContext";

//Importo estilos globales
import GlobalStyles from "../stylesheets/GlobalStyles";

//Importo la funcion de fetchusuarios
import { fetchUsuarios } from "../controllers/ABMuserController";

import UsersStyles from "../stylesheets/UsersStyles";
import ListaNavegacion from "../components/ListaNavegacion";
import CrearUsuario from "../components/CrearUsuario";

const Users = () => {
    const { setIsLoged, isLoged } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO
    const { infoApp } = useContext(propContext); //Para sacar la info de la app del context
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    const URL = `${infoApp.ip}:${infoApp.port}`//Extraigo la url ya que el path esta definido en la funcion fetchusuarios

    const [usuarios, setUsuarios] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    const navigation = useNavigation()

    const icons = [<ThreeDotsIcon/>, <CloseIcon/>]

    useEffect(() => {
        console.log('USE EFFECT USERS')
        console.log(isLoged)
        console.log(URL)
        console.log(fetchUsuarios(URL, 0, setIsLoading).then((data) => console.log(data)))

        fetchUsuarios(URL, 0, setIsLoading)
            .then((data) => {
                console.log(data)
                setUsuarios(data)
            })


    }, [openModal])

    return (
        <View style={GlobalStyles.containerClaro}>

            {openNav && <ListaNavegacion />}
            <CrearUsuario
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <View style={UsersStyles.contenido}>
                <View style={UsersStyles.contHeader}>
                    <View style={UsersStyles.barraBusqueda}>
                        <Input variant="rounded" placeholder="Buscar" />
                    </View>
                    <Button
                        width='35%'
                        backgroundColor='#0E79B2'
                        onPress={() => setOpenModal(true)}
                    >
                        <Text fontWeight='bold' color='white'>Crear Usuario</Text>
                    </Button>
                </View>
                <ScrollView style={UsersStyles.scrollUsers}>
                    <View style={UsersStyles.tabla}>
                        <View style={[UsersStyles.fila, UsersStyles.filaHeader]}>
                            <View style={[UsersStyles.col, UsersStyles.colMail]}>
                                <Text fontWeight='bold'>Usuario</Text>
                            </View>
                            <View style={UsersStyles.col}>
                                <Text fontWeight='bold'>Estado</Text>
                            </View>
                            <View style={UsersStyles.col}>
                                <Text fontWeight='bold'>Acciones</Text>
                            </View>
                        </View>

                        {
                            isLoading
                                ?
                                <Spinner />
                                :
                                <>
                                    {
                                        usuarios.map((usuario) => (
                                            <View key={usuario.id} style={UsersStyles.fila}>
                                                <View style={[UsersStyles.col, UsersStyles.colMail]}>
                                                    <Text>{usuario.usuario}</Text>
                                                </View>
                                                <View style={UsersStyles.col}>
                                                    {
                                                        usuario.eliminado
                                                            ?
                                                            <Text fontWeight='bold' color='red.500'>Inactivo</Text>
                                                            :
                                                            <Text fontWeight='bold' color='green.500'>Activo</Text>
                                                    }
                                                </View>
                                                <View style={[UsersStyles.col, UsersStyles.colAcciones]}>
                                                    <View style={UsersStyles.accionContainer}>
                                                        <View style={UsersStyles.icono}>
                                                            
                                                        </View>


                                                    </View>
                                                    <View style={UsersStyles.accionContainer}>
                                                        <View style={UsersStyles.icono}>
                                                            
                                                        </View>

                                                    </View>
                                                </View>
                                            </View>

                                        ))
                                    }
                                </>
                        }

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}


export default Users;