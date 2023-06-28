import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontWeight: '500'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    image: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    },
    arrow: {
        transform: [{ rotate: '90deg' }]
    },
    placeholder: {
        color: colors.lightGrey
    },
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 12,
        width: '80%'
    },
    select: {
        marginBottom: 16,
        fontSize: 16
    },
    listItem: {
        paddingVertical: 4,
        fontSize: 15
    },
    activeListItem: {
        color: colors.blue,
        fontWeight: 'bold'
    }
});