import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductProvider } from '../Context/ProductContext';

import HomeScreen from './HomeScreen';

const BottomTab = createBottomTabNavigator()

const MainFlow = () => {

    return (
        <ProductProvider>
            <BottomTab.Navigator>
                <BottomTab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            </BottomTab.Navigator>
        </ProductProvider>
    )
}

export default MainFlow;