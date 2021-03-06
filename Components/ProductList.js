import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ProductCard from './ProductCard'
import { useProducts } from '../Hooks/useProducts'

const ProductList = () => {

    const { products } = useProducts()

    return (
        <View style={styles.root} >
            <FlatList
                nestedScrollEnabled={true}
                data={products}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <ProductCard key={item.id.toString()} product={item} />
                }
            />
        </View>

    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default ProductList