import { StyleSheet } from "react-native";

const UsersStyles = StyleSheet.create({
   contenido:{
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    elevation: 5,
    padding: 10,
   },
   tabla:{
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
   },
   barraBusqueda:{
    marginBottom: 10,
   },
   contHeader:{
    marginBottom: 10,
   },
   fila:{
    flexDirection: 'row',
    marginBottom: 5,
    borderBottomWidth: 1,
    height: 50,
   },
   filaHeader:{
    height: 30,
   },
   col:{
    flex: 1,
    paddingLeft: 5,
    justifyContent: 'center',
   },
   colHeader:{
    borderWidth: 1,
   },
   colMail:{
    flex: 2,
   },
   colAcciones:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
   },
   accionContainer:{
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 50,
   }
   
   
});

export default UsersStyles;