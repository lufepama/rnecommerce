import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useOrderItems } from '../Hooks/useOrderItem'
import ProductCheckoutCard from './ProductCheckoutCard'
import { deleteOrderItem } from '../Helper/deleteOrderItem'
import { useUserInfo } from '../Hooks/useUserInfo'
import { useCart } from '../Hooks/useCart'

const ProductListCheckout = ({ products }) => {

    const { orderItemList, setOrderItemList } = useOrderItems();
    const { token } = useUserInfo()
    const { numberItemsCart, setNumberItemsCart } = useCart()

    const onDelete = (id) => {
        let newProducts = orderItemList.filter((item) =>
            item.id != id
        )
        setNumberItemsCart(numberItemsCart - 1)
        setOrderItemList(newProducts)
        deleteOrderItem(token, id)
            .then((res) => console.log(res))
    }

    return (
        <View style={style.root} >
            <FlatList
                nestedScrollEnabled={true}
                data={orderItemList}
                numColumns={1}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <ProductCheckoutCard key={item.id.toString()} product={item} onDelete={onDelete} />
                }
            />
        </View>

    )
}

const style = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ProductListCheckout
