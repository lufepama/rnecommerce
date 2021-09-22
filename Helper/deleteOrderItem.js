import {API} from '../backend'

export const deleteOrderItem = (token, orderitemId) => {

    return fetch(`${API}/api/orderitem/delete-order-item/${orderitemId}/`, {
        method:'DELETE',
        headers: {
            "Authorization": `Token ${token}` 
        },
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{console.log('err', err)})
}