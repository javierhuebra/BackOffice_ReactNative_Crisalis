# App Mobile - BackOffice Crisalis

![Alt text](assets/images/logoColor.png)

### Este proyecto reutiliza la tecnología utilizada para el front end para poder crear una extensión multiplataforma de la aplicación principal (web).

## Se conecta con una api desarrollada en Spring Boot.
<div>
  <img src="./capturas/img7.jpeg" width="200px"/>
  <img src="./capturas/img8.jpeg" width="200px"/>
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

