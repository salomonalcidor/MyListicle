import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionImage: {
        width: 24,
        height: 24
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.grey,
        marginBottom: 16
    },
    item: {
        padding: 8,
        paddingHorizontal: 16,
        marginVertical: 8
    },
    editBtn: {
        paddingVertical: 12,
        marginTop: 16
    }
})