import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { HomeStyles } from '../styles/HomeStyles';

const Home: FC = () => {
    return (
        <View style={HomeStyles.container}>
            <Image style={HomeStyles.circleImage} source={require('../../assets/smallANT.gif')} />
            <Text style={{ marginTop: 30, fontSize: 20, textAlign: 'center', fontWeight: 'bold', fontStyle: 'italic' }}>
                Małgorzata Stęień {"\n"}
                WSEI Programowanie aplikacji mobilnych i webowych Stac.
            </Text>
            <Text style={{ fontSize: 20, marginTop: 40 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
        </View>
    );
};

export default Home;