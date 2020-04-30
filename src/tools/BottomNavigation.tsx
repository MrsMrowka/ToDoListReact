import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import ToDoList from '../screens/toDoList/ToDoListNavigation';
import About from '../screens/About';


const Tab = createBottomTabNavigator();

const BottomNav: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#86a23a',
                activeBackgroundColor: '#f1f1f1',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ToDoList"
                component={ToDoList}
                options={{
                    tabBarLabel: 'ToDoList',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list-ul" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="About"
                component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="info" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNav;