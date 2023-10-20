import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E1EFC5'

    },
    containerClaro:{
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f9ffee'
    },
    contSecundario: {
        flex: 1,
        width: '100%',
        padding: 10,
        backgroundColor: '#FFF',
        elevation: 5
    },
    backColorPrimary: {
        backgroundColor: '#0E79B2'
    },
    backColorSecondary: {
        backgroundColor: '#9FCB45'
    },
    
});

export default GlobalStyles;