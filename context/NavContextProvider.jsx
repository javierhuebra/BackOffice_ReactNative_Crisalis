import React, { useState } from "react";
import { View } from "react-native";

//Importo el contexto
import { navContext } from "./propContext";


const NavContextProvider = ({ children }) => {

    const [openNav, setOpenNav] = useState(false)
    

    return ( 
        <navContext.Provider
            value={{
                openNav,
                setOpenNav
            }}
        >
            {children}
        </navContext.Provider>
     );
}
 
export default NavContextProvider;