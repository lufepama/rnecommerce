import React, { useState } from 'react'

const Context = React.createContext({})

export const ShoppingProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [numberItemsCart, setNumberItemsCart] = useState(0)
    
    return (
        <Context.Provider value={{ products, setProducts, numberItemsCart, setNumberItemsCart }} >
            {children}
        </Context.Provider>
    )
}

export default Context