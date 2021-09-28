import { API } from '../backend'

export const getFavProducts = (token) => {
    return fetch(`${API}/api/favproduct/get-fav-product/`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
    })
        .then((res) => {
            return res.json()
        })
        .catch((err) => { console.log('err', err) })
}