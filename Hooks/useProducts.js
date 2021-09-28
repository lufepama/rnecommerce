import React, { useContext, useEffect, useState } from 'react'
import ShoppingContext from '../Context/ShoppingContext'
import { getProducts } from '../Helper/getProducts'
import { useUserInfo } from './useUserInfo'
import { getFavProducts } from '../Helper/getFavProducts'

export const useProducts = () => {

    const { token } = useUserInfo()
    const { products, setProducts, favList, setFavList, isFavLoaded, setIsFavLoaded } = useContext(ShoppingContext)

    useEffect(() => {

        if (isFavLoaded) {
            getProducts(token)
                .then((res) => setProducts(res.success))
        } else {
            getFavProducts(token)
                .then((res) => {
                    console.log('fav useproducts', res)
                    setFavList(res.success)
                    setIsFavLoaded(true)
                })
        }
    }, [isFavLoaded])

    return { products, setProducts, favList, setFavList, isFavLoaded, setIsFavLoaded }
}