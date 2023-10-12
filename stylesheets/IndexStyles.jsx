import { StyleSheet } from "react-native";
const screenWidth = 350;
const imgHeight = screenWidth * 0.3775811

const screenWidthDos = 200;
const imgHeightDos = screenWidthDos * 0.3775811

const IndexStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        

    },
    contBotones: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        //width: Dimensions.get('window').width //Ta lindo esto para saber el ancho de la pantalla
        width: 450
    },
    imagenEncabezado: {
        width: screenWidthDos, // Ancho de la pantalla
        height: imgHeightDos, // Alto de la pantalla
        resizeMode: 'contain', // Mantiene la proporción sin deformar
    },
    imagen: {
        width: '100%', // Ancho de la pantalla
        height: imgHeight, // Alto de la pantalla
        resizeMode: 'contain', // Mantiene la proporción sin deformar
        borderRadius: 10
    },
    textBtn: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    contModalEndpoints: {
        //backgroundColor:'red', 
        height: 50,
        width: 50,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    pressableEndpoints: {
        height: "100%",
        width: "100%",
        backgroundColor: '#bdd3db49',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    engineeIcon: {
        height: 40,
        width: 40
    },
    cardHor:{
        width: 380,
        height: "100%",
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    ScrollView:{
        height: 150,
        width: '100%',
        marginTop: 10,       
    },
    imgBackground:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default IndexStyles;