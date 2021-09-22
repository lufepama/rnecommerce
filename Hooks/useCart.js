import React, { useContext, useEffect, useState } from 'react'
import ShoppingContext from '../Context/ShoppingContext'
import { getOrderItemList } from '../Helper/getOrderItemList'
import { useUserInfo } from '../Hooks/useUserInfo'

export const useCart = () => {

    const { token, order } = useUserInfo()
    const { numberItemsCart, setNumberItemsCart } = useContext(ShoppingContext) 
    
    useEffect( () => {
        getOrderItemList(token, order)
            .then( (res) => {
                setNumberItemsCart(res.length)} )
    },[] )

    return { numberItemsCart, setNumberItemsCart}
}