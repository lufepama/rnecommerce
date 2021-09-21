import React from 'react'
import {API} from '../backend'

export const postOrderItem = (productId, order, token) => {
    const userData = {
        "productId": productId.toString(),
        "orderId": order,
        "quantity": '1'
    }
    return fetch(`${API}/api/orderitem/create-order-item/`, {
        method:'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization":`Token ${token}`
        },
        body: JSON.stringify(userData)
    })
    .then((res)=>{
        
        return res.json()
    })
    .catch((err)=>{console.log('err', err)})
}