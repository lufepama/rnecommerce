import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import BottomTab from '../Components/BottomTab'
import Navbar from '../Components/Navbar'
import { useFocusEffect } from '@react-navigation/core'
import ProductListCheckout from '../Components/ProductListCheckout'
import { useOrderItems } from '../Hooks/useOrderItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'


const CartScreen = ({ navigation }) => {

    const [colours, setColours] = useState({
        home: 'orange',
        search: 'orange',
        fav: 'orange',
        checkout: 'black'
    })
    const { orderItemList } = useOrderItems()
    const [subtotal, setSubtotal] = useState(0)


    useFocusEffect(
        useCallback(() => {
            let sum = 0;
            orderItemList.map((item) => sum += parseFloat(item.subtotal))
            setSubtotal(Math.round(sum * 100) / 100)
        }, [orderItemList])
    );

    return (
        <View style={style.root}>
            <Navbar />
            <View style={style.mainContainer} >
                <ScrollView >
                    <View style={style.titleContainer}>
                        <Text style={style.title} >Tu carrito</Text>
                    </View>
                    {
                        orderItemList.length != 0
                            ? (
                                <View>
                                    <ProductListCheckout />
                                    <View style={style.amountContainer}>
                                        <View style={style.subtotalContainer}>
                                            <Text style={style.subtotal} > Subtotal: </Text>
                                            <Text style={style.subtotal}> {subtotal} </Text>
                                        </View>
                                    </View>
                                    <View style={style.payBtnContainer} >
                                        <TouchableOpacity style={style.payBtn} >
                                            <Text style={style.payText} >Pagar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>)
                            : <View style={style.absenceContainer} >
                                <Text>No tienes ningun producto en el carrito :(</Text>
                            </View>
                    }

                </ScrollView>
            </View>
            <BottomTab colours={colours} navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        backgroundColor: '#FEFDFA',
        marginTop: 20,
        padding: 10,
        textAlign: 'center',
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    titleContainer: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 45
    },
    amountContainer: {
        backgroundColor: '#F7FAE6'
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    absenceContainer: {
        backgroundColor: '#5DBF86',
        borderRadius: 20,
        alignItems: 'center'
    },
    subtotal: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    payBtn: {
        marginTop: 20,
        borderRadius: 15,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#42B140'
    },
    payBtnContainer: {
        height: 80,
        alignItems: 'center'
    },
    payText: {
        fontSize: 30
    }
})

export default CartScreen
