//Importo async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Funcion para guardar datos en el storage
export const saveStorageDatos = async (userData) => {
    const userDataSerializada = JSON.stringify(userData)
    try {
      await AsyncStorage.setItem('usuario', userDataSerializada)
      console.log('Usuario guardado en el storage: ', userDataSerializada)
    } catch (error) {
      console.log(error)
    }
  }

//Funcion para obtener datos de usuario del storage
export const getStorageDatos = async () => {
    try {
      const userDataSerializada = await AsyncStorage.getItem('usuario')
      if (userDataSerializada !== null) {
        const userData = JSON.parse(userDataSerializada)
        console.log('Usuario logueado, es: ', userData)
        return userData
      }else{
        console.log('El usuario no esta logueado')
      }
    } catch (error) {
      console.log(error)
    }
  }

//Funcion para borrar datos de usuario del storage
export const deleteStorageDatos = async () => {
    try {
      await AsyncStorage.removeItem('usuario')
      console.log('Usuario borrado del storage')
    } catch (error) {
      console.log(error)
    }
  }