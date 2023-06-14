import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    terms: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    termsText: {
        color: colors.blue,
        marginHorizontal: 14
    },
    bold: {
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 20,
    },
    footer: {
        color: colors.blue,
        marginBottom: 50,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
});