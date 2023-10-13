import React, { useState, useEffect } from "react";
import { View } from "react-native";

//Importo el contexto
import { userContext } from "./propContext";

//Importo las funciones dde async storage
import { getStorageDatos } from "../controllers/localStorageController";

const SessionContextProvider = ({ children }) => {

    const [userLogueado, setUserLogueado] = useState({})
    const [isLoged, setIsLoged] = useState(false)

    useEffect(() => {
        console.log('USE EFFECT SESSION CONTEXT')
        
        const cargarDatosDesdeStorage = async () => {
            try {
              const userData = await getStorageDatos();
              if (userData) {
                console.log('Usuario logueado, es: ', userData);
                setUserLogueado(userData);
                setIsLoged(true); // Marca al usuario como logueado
              } else {
                console.log('El usuario no está logueado');
              }
            } catch (error) {
              console.log('Error al obtener datos de AsyncStorage:', error);
            }
          };
      
          cargarDatosDesdeStorage();
    }, [])

    return ( 
        <userContext.Provider
            value={{
                userLogueado,
                setUserLogueado,
                isLoged,
                setIsLoged
            }}
        >
            {children}
        </userContext.Provider>
     );
}
 
export default SessionContextProvider;