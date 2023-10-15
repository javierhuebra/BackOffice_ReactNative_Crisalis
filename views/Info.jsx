import { useState } from "react";
import { Input, Text, Button, useToast, ScrollView, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Image, StyleSheet, View} from "react-native";

//Importo los estilos globales
import GlobalStyles from "../stylesheets/GlobalStyles";

const URL = 'http://192.168.0.109:8080/api/login'


const Info = () => {
   
    return (
        <View style={GlobalStyles.container}>
            <ScrollView>
                <View style={styles.contScroll}>
                    <Text fontSize="xl" mb="2">Bienvenido a Crisalis</Text>
                    <Text mb="2">
                        Nuestra aplicación es un poderoso software Backoffice diseñado para simplificar la gestión de ventas de productos y la asignación de servicios.
                        Con <Text fontWeight="bold">Crisalis</Text>, puedes optimizar y agilizar tus operaciones comerciales de una manera intuitiva y eficiente.
                    </Text>
                    <Text fontSize="xl" mb="2">Principales Características</Text>
                    <Text mb="2">
                        <Text fontWeight="bold">Gestión de compras:</Text> Con nuestra herramienta,
                        puedes realizar un seguimiento detallado de todas tus compras de productos.
                        Desde el pedido hasta la entrega, mantenemos todo bajo control.
                    </Text>
                    <Text mb="2">
                        <Text fontWeight="bold">Asiganción de servicios:</Text> Simplifica la asignación de servicios a tus clientes.
                        Deja asentado el servicio que te han solicitado para su posterior asignación con claridad y prioridades.
                    </Text>
                    <Text mb="2">
                        <Text fontWeight="bold">Informes y Análisis:</Text> Obtén información valiosa sobre tus operaciones.
                        Nuestra aplicación genera informes y análisis en tiempo real para tomar decisiones informadas.
                    </Text>
                    <Text mb="2">
                        <Text fontWeight="bold">Integración Sencilla:</Text> Conéctate fácilmente con otras herramientas y sistemas que ya utilizas.
                        La integración es rápida y sin complicaciones.
                    </Text>
                </View>

                <Center>
                    <Image source={require('../assets/images/logoLetras.png')   
                    } alt="Alternate Text" style={{width: 370, height: 100, opacity:0.5}}/>
                </Center>

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    contScroll:{
        paddingLeft: 15, 
        paddingTop: 15, 
        paddingRight: 15,
        backgroundColor:'white',
        marginVertical: 10,
        borderRadius: 10,
        elevation: 2,
    }
})
export default Info;