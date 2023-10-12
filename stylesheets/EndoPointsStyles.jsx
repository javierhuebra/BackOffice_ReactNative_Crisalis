import { StyleSheet } from "react-native";

const EndPointsStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03030378',
    },
    contenido: {
        width: '80%',
        //height: '80%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },

    body: {
        padding: 10,
        backgroundColor: '#F0F0F0',
    },
    tabla: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        paddingHorizontal: 10,
        backgroundColor: '#F0F0F0',
    },
    autores:{
        backgroundColor: '#d1dbd2',
    }
});

export default EndPointsStyles;