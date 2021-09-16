import {API} from '../backend'

export const getOrderId = (username, token) => {
    const userData = {'username':username}
    return fetch(`${API}/api/order/create-order/`, {
        method:'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${token}` 
        },
        body: JSON.stringify(userData)
    })
    .then((res)=>{
        
        return res.json()
    })
    .catch((err)=>{console.log('err', err)})
}