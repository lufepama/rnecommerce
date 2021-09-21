import React, { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import BottomTab from '../Components/BottomTab'
import Navbar from '../Components/Navbar'
import { useFocusEffect } from '@react-navigation/core'
import { getOrderItemList } from '../Helper/getOrderItemList'
import { useUserInfo } from '../Hooks/useUserInfo'
import ProductListCheckout from '../Components/ProductListCheckout'
const CheckOutScreen = ({navigation}) => {

    const [colours, setColours] = useState({
        home:'orange',
        search:'orange',
        fav:'orange',
        checkout:'black'
    })

    const {order, token} = useUserInfo()
    const [products, setProducts] = useState([])


    useFocusEffect(
        useCallback(() => {
            getOrderItemList(token, order)
                .then( (res) => {
                    console.log(res.success)
                    setProducts(res.success)} )
        }, [])
    );

    return (
        <View style={style.root}>
            <Navbar/>
            <ScrollView>
                <View style={style.titleContainer}>
                    <Text style={style.title} >Tu carrito</Text>
                </View>
                <View style={style.productsContainer}>
                    <ProductListCheckout products={products} />
                </View>
            </ScrollView>
            <BottomTab colours={colours} navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        backgroundColor:'#FEFDFA',
        marginTop:20,
        padding:10,
        textAlign:'center',
        flex:1,
    },  
    titleContainer:{
        flex:0.5,
        height:100,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:45
    },
    productsContainer:{
        flex:2,
    }
})

export default CheckOutScreen
