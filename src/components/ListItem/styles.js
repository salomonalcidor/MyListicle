import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        //ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.8,
        //android
        elevation: 5,

        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4
    },
    content: {

    },
    title: {
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 18,
    },
    subtitle: {
        color: colors.textGrey,
        fontSize: 12,
        marginTop: 6
    },
    line: {

    },
    image: {
        width: 32,
        height: 32
    }
});