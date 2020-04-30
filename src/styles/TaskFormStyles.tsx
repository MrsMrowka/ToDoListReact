import { StyleSheet, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

export const TaskFormStyles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        marginTop: StatusBar.currentHeight,
        marginLeft: 15,
        marginRight: 15
    },
    exitBtn: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'flex-end',
        right: 10
    },
    titleInput: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    textInput: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#86a23a'
    },
});