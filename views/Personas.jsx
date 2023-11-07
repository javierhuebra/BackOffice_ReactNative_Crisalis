import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import { Text, Input, Button } from "native-base";

import GlobalStyles from "../stylesheets/GlobalStyles";
import UsersStyles from "../stylesheets/UsersStyles";

//Con useContext le digo desde cual contexto quiero obtener los datos
import { navContext } from "../context/propContext";

import ListaNavegacion from "../components/ListaNavegacion";

import Icon from 'react-native-vector-icons/FontAwesome';

const person = <Icon name="child" size={20} color="#ffffff" />;

const Personas = () => {
    const { openNav } = useContext(navContext); //Para saber si esta abierto el menu de navegacion

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
                        <Button
                            width='40%'
                            bg='denim.100'
                            
                        >
                            <Text fontWeight='bold' color='white'>{person} Crear Persona</Text>
                        </Button>
                    </View>
                    <ScrollView style={UsersStyles.scrollUsers}>
                        <View style={UsersStyles.tabla}>
                            <View style={[UsersStyles.fila, UsersStyles.filaHeader]}>
                                <View style={[UsersStyles.col, UsersStyles.colMail]}>
                                    <Text fontWeight='bold'>Nombre</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold'>DNI</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold'>Estado</Text>
                                </View>
                                <View style={UsersStyles.col}>
                                    <Text fontWeight='bold'>Acciones</Text>
                                </View>
                            </View>

                            

                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
}

export default Personas;