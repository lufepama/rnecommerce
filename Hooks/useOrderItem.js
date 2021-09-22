import React, { useContext, useEffect, useState } from 'react'
import OrderItemContext from '../Context/OrderItemContext'
import { getOrderItemList } from '../Helper/getOrderItemList'
import { useUserInfo } from './useUserInfo'

export const useOrderItems = () => {

    const { token, order } = useUserInfo()
    const { orderItemList, setOrderItemList } = useContext(OrderItemContext) 
    
    useEffect( () => {
        getOrderItemList(token, order)
            .then( (res) => {
                setOrderItemList(res.success)} )
    },[] )

    return { orderItemList, setOrderItemList }
}