import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        backgroundColor: colors.lightGrey,
        padding: 10,
        borderRadius: 8,
        marginBottom: 8
    },
    image: {
        width: 32,
        height: 32
    },
    title: {
        color: colors.grey
    }
})