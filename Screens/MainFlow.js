import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShoppingProvider } from '../Context/ShoppingContext';
import FavouriteScreen from './FavouriteScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import { OrderItemProvider } from '../Context/OrderItemContext';
import CartScreen from './CartScreen';


const MainFlowStack = createNativeStackNavigator()

const MainFlow = ({}) => {

    return (
        <ShoppingProvider>
            <OrderItemProvider>
                <MainFlowStack.Navigator>
                    <MainFlowStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
                    <MainFlowStack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
                    <MainFlowStack.Screen name="Favourite" component={FavouriteScreen}  options={{ headerShown: false }} />
                    <MainFlowStack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                </MainFlowStack.Navigator>
            </OrderItemProvider>
        </ShoppingProvider>
    )
}

export default MainFlow;