import React, { useContext } from "react";
import { View } from "react-native";
import { Text } from "native-base";

import GlobalStyles from "../stylesheets/GlobalStyles";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { navContext } from "../context/propContext";

import ListaNavegacion from "../components/ListaNavegacion";

const Impuestos = () => {
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    return (
        <>
            {openNav && <ListaNavegacion />}
            <View style={[GlobalStyles.containerClaro, {backgroundColor:'#efe6fd'}]}>

                <View style={GlobalStyles.contSecundario}>
                    <Text>Impuestos</Text>
                </View>
            </View>
        </>
    );
}

export default Impuestos;