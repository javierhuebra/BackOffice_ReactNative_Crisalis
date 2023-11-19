import { StyleSheet } from "react-native";

const UsersStyles = StyleSheet.create({
   contenido: {
      backgroundColor: '#FFF',
      width: '100%',
      height: '100%',
      elevation: 5,
      padding: 10,
   },
   tabla: {
      borderWidth: 1,
      padding: 5,
      borderRadius: 10,
      backgroundColor: '#red',
   },
   barraBusqueda: {
      marginBottom: 10,
   },
   contHeader: {
      marginBottom: 10,
   },
   fila: {
      flexDirection: 'row',
      marginBottom: 5,
      borderBottomWidth: 1,
      height: 50,
   },
   filaHeader: {
      height: 30,
   },
   col: {
      flex: 1,
      paddingLeft: 5,
      justifyContent: 'center',
   },
   colHeader: {
      borderWidth: 1,
   },
   colMail: {
      flex: 2,
   },
   colAcciones: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 5,
   },
   accionContainer: {
      width: 40,
      height: 40,
      
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      
   },
   scrollUsers: {
      flex: 1,
   },
   icono: {
      width: 20,
      height: 20,
      borderRadius: 50,
      backgroundColor: 'red',
   },


});

export default UsersStyles;