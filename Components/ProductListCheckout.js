import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ProductCheckout from './ProductCheckout'

const ProductListCheckout = ({products}) => {

    return (
        <View style={style.root} >
        <FlatList
            nestedScrollEnabled={true}
            data={products}
            numColumns={1}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) =>
            <ProductCheckout key={item.id.toString()} product={item} /> 
        }
        />
        </View>
    
    )
}

const style = StyleSheet.create({
    root: {
        justifyContent:'center',
        alignItems:'center',
    }
})

export default ProductListCheckout
