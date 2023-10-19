import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        flex: 1,
        width: '100%',
        padding:10,
        elevation: 5,
    },
    contImg:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image:{
        width: 150, // Ancho de la pantalla
        height:40, // Alto de la pantalla
        borderRadius: 10,
    },
    intBtn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        height: 80,
        borderRadius: 10,
        marginBottom: 10,

    },
    contBtnInt:{
        flexDirection: 'row',
        alignItems: 'center',
    }
   
});

export default HomeStyles;