import React, { useContext, useState, useEffect } from "react";
import { View, ScrollView, Pressable } from "react-native";
import { Text, Input, Spinner, Button } from "native-base";

import GlobalStyles from "../stylesheets/GlobalStyles";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, propContext, navContext } from "../context/propContext";
//Estilos de las tablas (corregir nombre)
import UsersStyles from "../stylesheets/UsersStyles";

import ListaNavegacion from "../components/ListaNavegacion";
import { fetchSuscripciones } from "../controllers/SuscripcionesController";

const Activaciones = () => {
    const { setIsLoged, isLoged, userLogueado } = useContext(userContext); //PARA SABER SI ESTA LOGUEADO
    const { infoApp } = useContext(propContext); //Para sacar la info de la app del context
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    const URL = `${infoApp.ip}:${infoApp.port}`//Extraigo la url 

    const [isLoading, setIsLoading] = useState(false)
    const [suscripciones, setSuscripciones] = useState([])

    useEffect(() => {
        fetchSuscripciones(URL, setIsLoading, userLogueado)
            .then((data) => {
                data.sort((a, b) => {
                    if (a.apellido < b.apellido) {
                        return -1;
                    }
                    if (a.apellido > b.apellido) {
                        return 1;
                    }
                    return 0;
                });
                console.log(data)
                setSuscripciones(data)
            })
    }, [])

    return (

        <>
            {openNav && <ListaNavegacion />}
            <View style={GlobalStyles.containerClaro}>


                <View style={GlobalStyles.contSecundario}>
                    <View style={UsersStyles.contHeader}>
                        <View style={UsersStyles.barraBusqueda}>
                            <Input
                                variant="rounded"
                                placeholder="Buscar por usuario"

                            />
                        </View>

                    </View>
                    <ScrollView style={UsersStyles.scrollUsers}>
                        <View style={UsersStyles.tabla}>
                            <View style={[UsersStyles.fila, UsersStyles.filaHeader]}>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold' fontSize='10'>Fecha</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold' fontSize='10'>Persona</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold' fontSize='10'>Empresa</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold' fontSize='10'>Servicio</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold' fontSize='10'>Estado</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold' fontSize='10'>Acciones</Text>
                                </View>
                            </View>
                            {
                                isLoading
                                    ?
                                    <Spinner />
                                    :
                                    <>
                                        {
                                            suscripciones.map((suscripcion) => (
                                                <View key={suscripcion.id} style={[UsersStyles.fila,{paddingBottom:4}]}>
                                                    <View style={UsersStyles.col}>
                                                        <Text fontSize='10'>{suscripcion.fecha}</Text>
                                                    </View>
                                                    <View style={UsersStyles.col}>
                                                        <Text fontSize='10'>{suscripcion.persona}</Text>
                                                    </View>
                                                    <View style={UsersStyles.col}>
                                                        <Text fontSize='10'>{suscripcion.empresa}</Text>
                                                    </View>
                                                    <View style={UsersStyles.col}>
                                                        <Text fontSize='10'>{suscripcion.servicio}</Text>
                                                    </View>
                                                    <View style={UsersStyles.col}>
                                                        {
                                                            suscripcion.estado
                                                                ?
                                                                <Text fontSize='10' color='green.500'>Activo</Text>
                                                                :
                                                                <Text fontSize='10' color='red.500'>Inactivo</Text>
                                                        }

                                                    </View>
                                                    <View style={UsersStyles.col}>
                                                        <Pressable 
                                                        style={{backgroundColor:'#499ee3',
                                                        width:'100%', 
                                                        height:'75%', 
                                                        borderRadius: 8, 
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>
                                                            <Text fontSize='14' color='white'>Ver</Text>
                                                        </Pressable>
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

        </>
    );
}

export default Activaciones;