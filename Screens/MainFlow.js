import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShoppingProvider } from '../Context/ShoppingContext';
import FavouriteScreen from './FavouriteScreen';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchScreen from './SearchScreen';
import CheckOutScreen from './CheckOutScreen';


const MainFlowStack = createNativeStackNavigator()

const MainFlow = ({}) => {

    return (
        <ShoppingProvider>
            <MainFlowStack.Navigator>
                <MainFlowStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
                <MainFlowStack.Screen name="Favourite" component={FavouriteScreen}  options={{ headerShown: false }} />
                <MainFlowStack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                <MainFlowStack.Screen name="Checkout" component={CheckOutScreen} options={{ headerShown: false }} />
            </MainFlowStack.Navigator>
        </ShoppingProvider>
    )
}

export default MainFlow;