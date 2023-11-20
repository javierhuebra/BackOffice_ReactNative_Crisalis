import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const ButtonIcon = ({ icono, texto, background, view }) => {
    const navigation = useNavigation()

    return (
        <Pressable
            style={[styles.background, { backgroundColor: background }]}
            onPress={() => navigation.navigate(view)}
        >
            {icono}
            {texto}
        </Pressable>
    );
}
const styles = StyleSheet.create({
    background: {
        width: '30%',
        marginRight: 10,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
    }
})
export default ButtonIcon;