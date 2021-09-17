import {API} from '../backend'

export const getProducts = (token) => {
    return fetch(`${API}/api/product/get-products/`, {
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