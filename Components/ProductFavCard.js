import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { API } from '../backend'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useCart } from '../Hooks/useCart'
import { postOrderItem } from '../Helper/postOrderItem'
import { useUserInfo } from '../Hooks/useUserInfo'
import { useOrderItems } from '../Hooks/useOrderItem'
import { useFocusEffect } from '@react-navigation/core'


const ProductFavCard = ({ product, onDelete }) => {

    const { numberItemsCart, setNumberItemsCart } = useCart() //*
    const { orderItemList } = useOrderItems()
    const [isAdded, setIsAdded] = useState(false)

    const { token, order } = useUserInfo()

    const displayRating = () => {
        let totalRating = ''
        for (let i = 0; i < product.rating; i++) {
            totalRating += '⭐'
        }
        return <Text> {totalRating} </Text>
    }

    const onAddToCart = () => {
        if (!isAdded) {
            setIsAdded(true)
            setNumberItemsCart(numberItemsCart + 1)
            postOrderItem(product.id, order, token)
        }
    }

    useFocusEffect(
        useCallback(() => {

            const isProductAdded = orderItemList.some((item) => item.productId === product.id)

            if (isProductAdded) {
                setIsAdded(true)
            } else {
                setIsAdded(false)
            }

        }, [orderItemList])
    );

    return (
        <View style={styles.root} >
            <View style={styles.mainContainer}>
                <View style={styles.imagenContainer}>
                    <Image style={styles.image} source={{ uri: API + product.image }} />
                </View>
                <View style={styles.likeContainer} >
                    <TouchableOpacity onPress={() => onDelete(product.id)} >
                        <Icon
                            name='times'
                            color='orange'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.name} >  {product.name} </Text>
                    {/* <Text style={styles.description} numberOfLines={2} >  {product.description} </Text> */}
                    <View style={styles.pricingContainer} >
                        <Text>  {product.price}€ </Text>
                        {
                            product.previousPrice
                                ? <Text style={styles.previousPrice} >{product.previousPrice}€</Text>
                                : null
                        }
                    </View>

                    {displayRating()}
                    <View style={{
                        opacity: isAdded ? 0.5 : 1
                    }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'orange',
                            height: 30,
                            borderRadius: 10,
                        }} onPress={onAddToCart}
                            activeOpacity={isAdded ? 1 : 0.2}
                        >
                            <Text>Lo quiero</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginLeft: 7,
        width: 330,
        marginRight: 7,
        shadowColor: "#000",
        paddingHorizontal: 3,
        paddingVertical: 8,
        borderWidth: 0,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3,
    },
    mainContainer: {
        height: 150,
        flexDirection: 'row',

    },
    imagenContainer: {

    },
    descriptionContainer: {
        flexDirection: 'column'
    },
    image: {
        width: 140,
        height: 150,
        resizeMode: 'contain'
    },
    likeContainer: {
        position: 'absolute',
        right: 10,
        top: 5,
    },
    description: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 13
    },
    name: {
        fontWeight: 'bold',
    },
    pricingContainer: {
        flexDirection: 'row',
        flex: 0.5,
    },
    previousPrice: {
        textDecorationLine: 'line-through',
        color: 'red'
    },
    addBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        height: 30,
        borderRadius: 10,
    }
})

export default ProductFavCard
