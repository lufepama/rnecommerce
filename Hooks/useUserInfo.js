import React, { useContext, useEffect, useState } from 'react'
import UserCredentialsContext from '../Context/UserCredentialsContext'
import { getOrderId } from '../Helper/getOrderId'
import { getCredentials } from '../Helper/index'

export const useUserInfo = () => {

    const {userInfo, token, order, isUserLogged, setIsUserLogged, setOrder, setToken, setUserInfo} = useContext(UserCredentialsContext) 
    
    useEffect( () => {
        
        if (!token) {
            getCredentials()
                .then( (token) => {
                    setToken(token)
            } )
        }

    },[] )

    return { userInfo, token, order, setOrder ,isUserLogged, setIsUserLogged, setToken, setUserInfo }

}