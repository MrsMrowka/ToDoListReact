import { StyleSheet, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

export const AboutStyles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 20,
        marginLeft: 15,
        marginRight: 15,
    },
    title: {
        fontSize: 20,
        bottom: 100,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 20,
        bottom: 100,
        color: 'grey',
    },
    diamondImage: {
        width: 150,
        height: 150,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 8,
        borderColor: 'lightgrey',
        alignSelf: 'flex-end',
    },
    coverImage: {
        width: Dimensions.get('screen').width - 30,
        height: Dimensions.get('screen').width - 30,
        bottom: 20,
    }
});