import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../Context/ProductContext'
import { getProducts } from '../Helper/getProducts'
import { useUserInfo } from './useUserInfo'

export const useProducts = () => {

    const { token } = useUserInfo()
    const { products, setProducts } = useContext(ProductContext) 
    
    useEffect( () => {
        console.log('useefect products')
        getProducts(token)
            .then( (res) => setProducts(res.success))
    },[] )

    return { products, setProducts }
}