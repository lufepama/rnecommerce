import {API} from '../backend'

export const getOrderItemList = ( token,order) => {
    return fetch(`${API}/api/orderitem/get-order-items/${order}/`, {
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${token}` 
        },
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{console.log('err', err)})
}