import { StyleSheet, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

export const HomeStyles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        marginTop: StatusBar.currentHeight,
        marginLeft: 15,
        marginRight: 15,
    },
    circleImage: {
        width: 200,
        height: 200,
        marginLeft: 10,
        marginTop: 30,
        borderRadius: 100,
        overlayColor: '#f2f2f2',
        alignSelf: 'center',
    },
    regularImage: {
        width: 200,
        height: 200,
    },
    name: {
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
});