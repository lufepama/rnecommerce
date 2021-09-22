import React, { useState } from 'react'

const Context = React.createContext({})

export const OrderItemProvider = ({children}) => {

    const [orderItemList, setOrderItemList] = useState([])
    
    return (
        <Context.Provider value={{ orderItemList, setOrderItemList }} >
            {children}
        </Context.Provider>
    )
}

export default Context