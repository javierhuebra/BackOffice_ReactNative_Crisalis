import React, { useState } from "react";
import { View } from "react-native";

//Importo el contexto
import { propContext } from "./propContext";

const PropsComponentProvider = ({ children }) => {
    const [infoApp, setInfoApp] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)

    return ( 
        <propContext.Provider
            value={{
                infoApp,
                setInfoApp,
                isLoading,
                setIsLoading,
                loaded,
                setLoaded
            }}
        >
            {children}
        </propContext.Provider>
     );
}
 
export default PropsComponentProvider;