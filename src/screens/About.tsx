import React, { FC } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { AboutStyles } from '../styles/AboutStyles';

const About: FC = () => {
    return (
        <ScrollView>
            <View style={AboutStyles.container}>
                <Image style={AboutStyles.diamondImage} source={require('../../assets/antSPLASH.png')} />

                <Text style={AboutStyles.title}>
                    Lorem ipsum
                    </Text>
                <Text style={AboutStyles.subTitle}>
                    dolor sit amet
                    </Text>

                <Text style={{ fontSize: 20, bottom: 50 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
                <Image style={AboutStyles.coverImage} source={require('../../assets/antSPLASH.png')} />
                <Text style={{ fontSize: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
            </View>
        </ScrollView>
    );
};

export default About;