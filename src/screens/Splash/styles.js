import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        Height: '100%',
        paddingTop: 100
    },
    titleContainer: {
        marginVertical: 54
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row'
    },
    image: {
        width: '100%',
        height: 200
    },
    subtitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    subtext: {
        color: colors.orange,
        textDecorationLine: 'underline'
    },
    footerText: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30
    }
})