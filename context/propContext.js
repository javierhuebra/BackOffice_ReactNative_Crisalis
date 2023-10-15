

import { createContext } from 'react';

export const propContext = createContext();//Context para manejar las propiedades de la app que vienen de firebase
export const userContext = createContext();//Context para manejar los datos del usuario que se loguea
//export const loadingContext = createContext();//Context para manejar el estado de carga de la app, no lo voy a usar porque meti un isLoaded en el propContext
export const navContext = createContext();