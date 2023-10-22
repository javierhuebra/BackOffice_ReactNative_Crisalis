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
        backgroundColor: '#E1EFC5'

    },
    contBotones: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        //width: Dimensions.get('window').width //Ta lindo esto para saber el ancho de la pantalla
        width: '100%',

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
        borderRadius: 10,
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
    contUserLogueado: {
        position: 'absolute',
        top: 10,
        right: 10,
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    pressableEndpoints: {
        height: "100%",
        width: "100%",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    engineeIcon: {
        height: 40,
        width: 40
    },
    cardHor: {
        width: 380,
        height: "100%",
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    ScrollView: {
        height: 150,
        width: '100%',
        
        
    },
    imgBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    contenedorImgBtn1: {
        backgroundColor: '#e9f3d4',
        width: '100%',
        padding: 10,
        height: '40%',
        justifyContent: 'space-around',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default IndexStyles;