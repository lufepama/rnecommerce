import React, { useState } from 'react'
import { useUserInfo } from '../Hooks/useUserInfo'

const Context = React.createContext({})

export const ShoppingProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [numberItemsCart, setNumberItemsCart] = useState(0)
    const [favList, setFavList] = useState([])
    const [isFavLoaded, setIsFavLoaded] = useState(false)

    return (
        <Context.Provider value={{
            products, setProducts, favList,
            isFavLoaded, setIsFavLoaded, setFavList, numberItemsCart, setNumberItemsCart
        }} >
            {children}
        </Context.Provider>
    )
}

export default Context