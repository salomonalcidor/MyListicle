import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({

    container: {
        padding: 24
    },
    sectionTitle: {
        color: colors.blue,
        fontWeight: '500',
        marginBottom: 16
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey,
        borderStyle: 'solid',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 8,
        marginTop: 8
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.lightGrey,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 28,
        marginTop: -3,
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: 16
    },
    imgContainer: {
        flexDirection: 'row',
        marginRight: 8,
        marginTop: 8
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    closeIcon: {
        width: 24,
        height: 24,
        marginLeft: -16,
        marginTop: -10,
        borderRadius: 15,
        backgroundColor: colors.white
    },
    description: {
        minHeight: 150,
        paddingTop: 15
    },
    submitBtn: {
        marginBottom: 160
    }
});