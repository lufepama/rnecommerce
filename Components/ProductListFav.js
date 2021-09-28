import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useProducts } from '../Hooks/useProducts'
import ProductFavCard from './ProductFavCard'
import { deleteFavProduct } from '../Helper/deleteFavProduct'
import { useUserInfo } from '../Hooks/useUserInfo'

const ProductListFav = ({ }) => {

    const { favList, setFavList } = useProducts()
    const { token } = useUserInfo()

    const onDelete = (id) => {
        let newProducts = favList.filter((item) =>
            item.id != id
        )
        setFavList(newProducts)
        deleteFavProduct(token, id)
    }

    return (
        <View style={style.root} >
            <FlatList
                data={favList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <ProductFavCard
                        key={item.id.toString()}
                        product={item}
                        onDelete={onDelete}
                    />
                }
            />
        </View>
    )
}
const style = StyleSheet.create({
    root: {

    }
})

export default ProductListFav


