import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
    form:{
        backgroundColor: '#FFF',
        width: '100%',
        padding:10,
        borderRadius: 10,
        elevation: 5,
    },
    logo:{
        width: 150,
        height: 150,
        marginBottom: 10,
        position:'absolute',
        top:-165
        
    },
    secondContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
   
});

export default LoginStyles;