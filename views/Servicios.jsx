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



const Servicios = () => {
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

   
    const servicios = <Icon name="paper-plane" size={40} color="#88af3a" />;



    const serviciosTexto = <Text fontSize={16} fontWeight='bold' color='#88af3a' >Activaciones</Text>;
    
    return (
        <>
            {openNav && <ListaNavegacion />}
            <View style={GlobalStyles.containerClaro}>

                <View >
                    <Text fontSize={25} fontWeight='bold' textAlign='center' mb={1}>Servicios</Text>

                </View>
                <View style={GlobalStyles.contSecundario}>
                    <Text fontSize={16} textAlign='center' color='gray.400' mb={3}>
                        Espacio para gestionar servicios asignados a los clientes.
                    </Text>
                    <View style={styles.contBtns}>
                        <ButtonIcon background='#e9f3d4' icono={servicios} texto={serviciosTexto} view='Activations' />  
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
export default Servicios;