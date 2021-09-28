import { API } from '../backend'

export const deleteFavProduct = (token, productId) => {

    return fetch(`${API}/api/favproduct/delete-fav-product/${productId}/`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Token ${token}`
        },
    })
        .then((res) => {
            return res.json()
        })
        .catch((err) => { console.log('err', err) })
}