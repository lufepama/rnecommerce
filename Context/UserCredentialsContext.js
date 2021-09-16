import React, { useState } from 'react'

const Context = React.createContext({})

export const UserCredentialsProvider = ({children}) => {

    const [userInfo, setUserInfo] = useState({})
    const [isUserLogged, setIsUserLogged] = useState(false)
    const [order, setOrder] = useState('')
    const [token, setToken] = useState('')
    
    return (
        <Context.Provider value={{userInfo, token, order, isUserLogged, setIsUserLogged,setOrder, setToken, setUserInfo}} >
            {children}
        </Context.Provider>
    )
}

export default Context