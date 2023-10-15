
import React, { useEffect } from 'react';

//Importo el provider de native base para usarla
import { NativeBaseProvider, Button } from "native-base";


//Importacion de recursos para navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importacion de recursos para UI
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';

//Importación de vistas
import Info from './views/Info';
import Index from './views/Index';
import Home from './views/Home';
import Login from './views/Login';
import Users from './views/Users';

//Importo el context provider de las propiedades
import PropsComponentProvider from './context/PropsComponentProvider';

//Importo el context provider de la sesion
import SessionContextProvider from './context/SessionContextProvider';
import NavList from './components/NavList';
import NavContextProvider from './context/NavContextProvider';



//Creo el stack para la navegacion
const Stack = createNativeStackNavigator();


const App = () => {


  //Este use es para ignorar un warning que me da la app con una dependencia de native base, con mas ganas lo voy a eliminar pero no es grave.
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);



  return (
    <>
      <NativeBaseProvider>
        <PropsComponentProvider>
          <SessionContextProvider>
            <NavContextProvider>
              <StatusBar
                barStyle='light-content'
                backgroundColor='black'
              />

              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    animation: 'none', // Cambia la animación aquí
                  }}
                  //ruta en la que se inicia
                  initialRouteName='Index'
                >
                  <Stack.Screen
                    name="Index"
                    component={Index}
                    options={{
                      title: "Index",

                      //Anular la barra de navegacion
                      headerShown: false
                    }}
                  />

                  <Stack.Screen
                    name="Info"
                    component={Info}
                    options={{
                      title: "Información"
                    }}
                  />

                  <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                      title: "Login",
                    }}
                  />

                  <Stack.Screen
                    name="Home"
                    component={Home}
                    /* options={({ route }) => ({
                        title: route.params.data.email,
                        headerBackVisible:false
                      })} */
                    options={{
                      title: "Home",
                      //Anular la barra de navegacion
                      //headerShown: false
                    }}
                  />

                  <Stack.Screen
                    name="Users"
                    component={Users}
                    options={{
                      title: "Usuarios",
                      headerRight: () => (
                        <NavList />
                      ),
                    }}
                  />

                </Stack.Navigator>
              </NavigationContainer>
            </NavContextProvider>
          </SessionContextProvider>
        </PropsComponentProvider>
      </NativeBaseProvider>
    </>
  );
}


export default App;