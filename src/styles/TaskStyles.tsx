import { StyleSheet } from 'react-native';

export const TaskStyles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
    },
    border: {
        padding: 15,
        borderColor: '#bbb',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    deleteBtn: {
        alignItems: 'flex-end',
        bottom: '50%',
        right: 20
    },
});