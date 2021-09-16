import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';

const Drawer = createBottomTabNavigator()

const MainFlow = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        </Drawer.Navigator>
    )
}

export default MainFlow;