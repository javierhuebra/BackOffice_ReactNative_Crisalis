import React, { useContext } from "react";
import { View } from "react-native";
import { Spinner, Text } from "native-base";

import GlobalStyles from "../stylesheets/GlobalStyles";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { navContext } from "../context/propContext";

import ListaNavegacion from "../components/ListaNavegacion";

const ListadoPedidos = () => {
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    return (
        <>
            {openNav && <ListaNavegacion />}
            <View style={[GlobalStyles.containerClaro, {backgroundColor: '#dbeafe'}]}>

                <View style={GlobalStyles.contSecundario}>
                    <Text>Listado Pedidos</Text>
                    <Text>En construcción...</Text>
                    <Spinner color="blue.500" />
                </View>
            </View>
        </>
    );
}

export default ListadoPedidos;