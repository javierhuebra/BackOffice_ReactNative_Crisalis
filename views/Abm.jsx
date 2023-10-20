import React, { useContext } from "react";

import { View, Image, Pressable, StyleSheet } from "react-native";
import { Text, Button, Center } from 'native-base'
import { useNavigation } from "@react-navigation/native";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { userContext, navContext } from "../context/propContext";
import GlobalStyles from "../stylesheets/GlobalStyles";
import ButtonIcon from "../components/ButtonIcon";
import ListaNavegacion from "../components/ListaNavegacion";
import Icon from 'react-native-vector-icons/FontAwesome';



const Abm = () => {
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

    const usuarios = <Icon name="users" size={40} color="#7e3af2" />;
    const personas = <Icon name="child" size={40} color="#7e3af2" />;
    const empresas = <Icon name="building" size={40} color="#7e3af2" />;
    const clientes = <Icon name="laptop" size={40} color="#7e3af2" />;
    const productos = <Icon name="diamond" size={40} color="#7e3af2" />;
    const servicios = <Icon name="paper-plane" size={40} color="#7e3af2" />;
    const impuestos = <Icon name="rocket" size={40} color="#7e3af2" />;

    const usuariosTexto = <Text fontSize={16} fontWeight='bold' color='#7e3af2' >Usuarios</Text>;
    const personasTexto = <Text fontSize={16} fontWeight='bold' color='#7e3af2' >Personas</Text>;
    const empresasTexto = <Text fontSize={16} fontWeight='bold' color='#7e3af2' >Empresas</Text>;
    const clientesTexto = <Text fontSize={16} fontWeight='bold' color='#7e3af2' >Clientes</Text>;
    const productosTexto = <Text fontSize={16} fontWeight='bold' color='#7e3af2' >Productos</Text>;
    const serviciosTexto = <Text fontSize={16} fontWeight='bold' color='#7e3af2' >Servicios</Text>;
    const impuestosTexto = <Text fontSize={16} fontWeight='bold' color='#7e3af2' >Impuestos</Text>;
    return (
        <View style={GlobalStyles.containerClaro}>
            {openNav && <ListaNavegacion />}
            <View >
                <Text fontSize={25} fontWeight='bold' textAlign='center' mb={1}>Altas, Bajas y Modificaciones</Text>

            </View>
            <View style={GlobalStyles.contSecundario}>
                <Text fontSize={16} textAlign='center' color='gray.400' mb={3}>
                    Espacio para modificaciones generales de los datos del sistema.
                </Text>
                <View style={styles.contBtns}>
                    <ButtonIcon background='#efe6fd' icono={usuarios} texto={usuariosTexto} view='Users' />
                    <ButtonIcon background='#efe6fd' icono={personas} texto={personasTexto} view='Users' />
                    <ButtonIcon background='#efe6fd' icono={empresas} texto={empresasTexto} view='Users' />
                </View>
                <View style={styles.contBtns}>
                    <ButtonIcon background='#efe6fd' icono={clientes} texto={clientesTexto} view='Users' />
                    <ButtonIcon background='#efe6fd' icono={productos} texto={productosTexto} view='Users' />
                    <ButtonIcon background='#efe6fd' icono={servicios} texto={serviciosTexto} view='Users' />
                </View>
                <View style={styles.contBtns}>
                    <ButtonIcon background='#efe6fd' icono={impuestos} texto={impuestosTexto} view='Users' />
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    contBtns: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-around'
    }
})
export default Abm;