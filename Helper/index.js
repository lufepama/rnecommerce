import React from 'react'
import { AsyncStorage } from 'react-native'


export const getCredentials = async () => {
    const response = await AsyncStorage.getItem('user')
    if (response) {
        return response
    }
    return false
}

export const deleteToken = async () => {

    try{
        await AsyncStorage.removeItem('user')
        return true
    } catch (err){
        console.log(err)
        return false
    }
}

export const saveToken = async (token) => {
    if (token) {
        try{
            await AsyncStorage.setItem('user', token)
        } catch (err){
            console.log(err)
        }
    }
    return false
}