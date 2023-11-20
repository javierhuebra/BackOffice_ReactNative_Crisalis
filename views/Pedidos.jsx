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



const Pedidos = () => {
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

   
    const servicios = <Icon name="paper-plane" size={40} color="#0e79b2" />;

    const pedidoIcono = <Icon name="shopping-cart" size={40} color="#0e79b2" />
    const listaIcono = <Icon name="list-ul" size={30} color="#0e79b2" />;

    const pedidoTexto= <Text fontSize={16} fontWeight='bold' color='#0e79b2' >Altas</Text>;
    const listadoTexto = <Text fontSize={16} fontWeight='bold' color='#0e79b2' >Listado</Text>;
    
    return (
        <>
            {openNav && <ListaNavegacion />}
            <View style={[GlobalStyles.containerClaro, {backgroundColor: '#dbeafe'}]}>

                <View >
                    <Text fontSize={25} fontWeight='bold' textAlign='center' mb={1}>Pedidos</Text>
                </View>
                <View style={GlobalStyles.contSecundario}>
                    <Text fontSize={16} textAlign='center' color='gray.400' mb={3}>
                        Espacio para gestionar servicios asignados a los clientes.
                    </Text>
                    <View style={styles.contBtns}>
                        <ButtonIcon background='#dbeafe' icono={pedidoIcono} texto={pedidoTexto} view='AltasPedidos' />  
                        <ButtonIcon background='#dbeafe' icono={listaIcono} texto={listadoTexto} view='ListadoPedidos' />  
                    </View>
                    
                    
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    contBtns: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'flex-start',
    }
})
export default Pedidos;