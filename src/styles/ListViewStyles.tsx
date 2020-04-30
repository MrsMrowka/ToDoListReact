import { StyleSheet, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const ListViewStyles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        marginTop: StatusBar.currentHeight,
    },
    titleBG: {
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#86a23a',
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    plusBtnPosition: {
        position: 'absolute',
        top: Dimensions.get('window').height - 90,
        left: Dimensions.get('screen').width - 70
    },
    plusBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#86a23a',
        width: 50,
        height: 50,
        borderRadius: 100,
    },
});