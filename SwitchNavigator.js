import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen'
import SigninScreen from './Screens/SigninScreen';
import SignupScreen from './Screens/SignupScreen';
import { getCredentials } from './Helper/index'
import { useUserInfo } from './Hooks/useUserInfo'
import MainFlow from './Screens/MainFlow';
import AuthFlow from './Screens/AuthFlow';

const StackNavigator = createNativeStackNavigator()

const SwitchNavigator = () => {

    const { isUserLogged, setIsUserLogged } = useUserInfo();

    useEffect( () => {
        getCredentials()
          .then( (res) => {
              if (res) {
              setIsUserLogged(true)
              } 
          } )
    },[isUserLogged] )

    return (
        <NavigationContainer>
          <StackNavigator.Navigator>
            {
              isUserLogged ? (
                <StackNavigator.Screen name='MainFlow' component={MainFlow} options={{ headerShown: false }}/>
            ):(
                <StackNavigator.Screen name='Authentication' component={AuthFlow} options={{ headerShown: false }} />
            )
            }
          </StackNavigator.Navigator>
        </NavigationContainer>
    )

}

export default SwitchNavigator