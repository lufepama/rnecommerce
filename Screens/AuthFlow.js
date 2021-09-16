import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';

const AuthStack = createNativeStackNavigator()

const AuthFlow = () => {

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name='Signin' component={SigninScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }}/>
        </AuthStack.Navigator>
    )
}

export default AuthFlow