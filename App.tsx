import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './src/tools/BottomNavigation';
import { StyleSheet, Text, View } from 'react-native';

interface IMainProps { }

const Main: FC<IMainProps> = props => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  )
}

export default Main;