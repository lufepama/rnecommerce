import React from 'react'
import {API} from '../backend'

export const signin = (username, password) => {
    const userData = {'username':username, 'password':password}
    return fetch(`${API}/api/user/login/`, {
        method:'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then((res)=>{
        
        return res.json()
    })
    .catch((err)=>{console.log('err', err)})
}