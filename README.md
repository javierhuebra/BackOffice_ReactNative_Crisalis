# App Mobile - BackOffice Crisalis

![Alt text](assets/images/logoColor.png)

### Este proyecto reutiliza la tecnología que se eligió para el front end para poder así, con los conceptos del desarrollo web, poder crear una extensión multiplataforma de la aplicación principal (web).

### React Native provee soporte nativo para iOS y Android, es decir que la aplicación resultante se puede buildear para los dos sistemas operativos mobile mas utilizados al día de la fecha manejando sus respectivas apis (crea componentes nativos). 

### Otra de las ventajas de ésta tecnología es la reducción de tiempos y costos, pudiendo así con un mismo equipo desarrollar ambas plataformas en simultáneo (en este caso, una vez que se se comprueba el funcionamiento en plataforma web se transfiere la lógica sin problemas). 

### La inserción de este modelo de aplicación en el proyecto favorece el trabajo de campo por parte de los técnicos u operarios que deban realizar visitas físicas en las instalaciones donde se proveen los servicios y le proporciona valor agregado al producto al brindar un servicio mas abarcativo a nuestro cliente.

### Sprint 1 (DONE)

<div>
  <img src="./capturas/img7.jpeg" width="200px"/>
  <img src="./capturas/img8.jpeg" width="200px"/>
  <img src="./capturas/img4.jpeg" width="200px"/>
  <img src="./capturas/img10.jpeg" width="200px"/>
  <img src="./capturas/img6.jpeg" width="200px"/>
  <img src="./capturas/img2.jpeg" width="200px"/>
  <img src="./capturas/img1.jpeg" width="200px"/>
  <img src="./capturas/img9.jpeg" width="200px"/>
  <img src="./capturas/img3.jpeg" width="200px"/>
  <img src="./capturas/img5.jpeg" width="200px"/>
</div>


### Sprint 2 (WORK IN PROGRESS) status: en crud empresas
<img src="./capturas/img12.jpeg" width="200px"/>
<img src="./capturas/img11.jpeg" width="200px"/>

## Sprint 3 (PENDING)

## Sprint 4 (PENDING)



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

