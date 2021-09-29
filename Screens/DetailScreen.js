import React, { useState, useCallback } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Navbar from '../Components/Navbar';
import { API } from '../backend';
import { useFocusEffect } from '@react-navigation/core';
import { postOrderItem } from '../Helper/postOrderItem';
import { useUserInfo } from '../Hooks/useUserInfo';
import { useCart } from '../Hooks/useCart';
import { useOrderItems } from '../Hooks/useOrderItem';

const DetailScreen = ({ route }) => {

    const product = route.params.product;
    const { token, order } = useUserInfo()
    const [isAdded, setIsAdded] = useState(false)
    const { numberItemsCart, setNumberItemsCart } = useCart() //*
    const { orderItemList } = useOrderItems()

    const onAddToCart = () => {
        if (!isAdded) {
            setIsAdded(true)
            setNumberItemsCart(numberItemsCart + 1)
            postOrderItem(product.id, order, token)
        }
    }

    const displayRating = () => {
        let totalRating = ''
        for (let i = 0; i < product.rating; i++) {
            totalRating += '⭐'
        }
        return <Text style={style.rating} > {totalRating} </Text>
    }

    useFocusEffect(
        useCallback(() => {

            const isProductAdded = orderItemList.some((item) => item.productId === product.id)

            if (isProductAdded) {
                setIsAdded(true)
            } else {
                setIsAdded(false)
            }

        }, [])
    );

    return (
        <View style={style.root} >
            <Navbar />
            <View style={style.mainContainer} >
                <View style={style.imageContainer} >
                    <Image
                        style={style.image}
                        source={{ uri: API + product.image }}
                    />
                </View>

                <View style={style.infoContainer} >
                    <Text style={style.name} >
                        {product.name}
                    </Text>
                    <Text style={style.description} >
                        {product.description}
                    </Text>
                    <View style={style.pricingContainer} >
                        <Text style={style.price} >
                            {product.price} €
                        </Text>
                        <Text style={style.previousPrice} >
                            {product.previousPrice}  €
                        </Text>
                        <View style={style.offerContainer} >
                            <Text  >Oferta Top</Text>
                        </View>
                    </View>
                    {displayRating()}
                    <View style={style.addBtnContainer}
                        style={{ opacity: isAdded ? 0.5 : 1 }}
                    >
                        <TouchableOpacity style={style.addBtn}
                            onPress={onAddToCart}
                        >
                            <Text>{isAdded ? 'Añadido!' : 'Lo quiero'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#E9E9E9',
        borderRadius: 10
    },
    imageContainer: {
        alignItems: 'center',
        flex: 0.6
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    infoContainer: {
        flex: 1
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 20,
        fontWeight: '100',
        flex: 0.3
    },
    pricingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        marginRight: 25,
        fontSize: 20
    },
    previousPrice: {
        fontSize: 20,
        textDecorationLine: 'line-through',
        color: 'red'
    },
    offerContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        marginLeft: 10,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    rating: {
        flex: 0.2,
        marginTop: 20,
        fontSize: 20
    },
    addBtnContainer: {

    },
    addBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        height: 30,
        borderRadius: 10,
    }
})

export default DetailScreen
