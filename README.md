# App Mobile - BackOffice Crisalis

![Alt text](assets/images/logoColor.png)

## Se conecta con una api desarrollada en Spring Boot.
<div>
  <img src="./capturas/img7.jpeg" width="200px"/>
  <img src="./capturas/img4.jpeg" width="200px"/>
  <img src="./capturas/img6.jpeg" width="200px"/>
  <img src="./capturas/img2.jpeg" width="200px"/>
  <img src="./capturas/img1.jpeg" width="200px"/>
  <img src="./capturas/img3.jpeg" width="200px"/>
  <img src="./capturas/img5.jpeg" width="200px"/>
</div>



### Especificaciones de react navigation para tener en cuenta

REACT NAVIGATION:

DEPENDENCIAS USADAS PARA REACT NAVIGATION + IMPORTS (Atencion el return del app debe estar contenido en <></> sino no anda)

- npm install @react-navigation/native

- npm install react-native-screens

- npm install react-native-safe-area-context

- npm install @react-navigation/native-stack

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

--------------------------------------------------------------
NATIVE BASE:

- A la hora de crear la app con la ultima version al dia del 19/08/2023 tuve un warning desde native base cuando utilicé las siguientes dependencias:

npm install native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2

Ignoré la advertencia utilizando los recursos de react para tal situación:

useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

La advertencia sigue en metro pero no se muestra en la ui de la app. Tambien se puede borrar y eliminar de raiz el error pero no lo probé porque lleva un par de pasos extras.

-------------------------------------------------------------

