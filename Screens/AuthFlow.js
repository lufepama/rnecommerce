import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from './AuthenticationScreen';

const AuthStack = createNativeStackNavigator()

const AuthFlow = () => {

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name='Authentication' component={AuthenticationScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    )
}

export default AuthFlow