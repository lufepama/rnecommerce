import React, { useContext, useEffect, useState } from 'react'
import ShoppingContext from '../Context/ShoppingContext'
import { getProducts } from '../Helper/getProducts'
import { useUserInfo } from './useUserInfo'

export const useProducts = () => {

    const { token } = useUserInfo()
    const { products, setProducts } = useContext(ShoppingContext) 
    
    useEffect( () => {
        getProducts(token)
            .then( (res) => setProducts(res.success))
    },[] )

    return { products, setProducts }
}