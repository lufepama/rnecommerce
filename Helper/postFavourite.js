import React from 'react'
import { API } from '../backend'

export const postFavourite = (token, username, productId) => {

    const userData = {
        "productId": productId.toString(),
        "username": username
    }
    return fetch(`${API}/api/favproduct/add-fav-product/`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify(userData)
    })
        .then((res) => {
            return res.json()
        })
        .catch((err) => { console.log('err', err) })
}