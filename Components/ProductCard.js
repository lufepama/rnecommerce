import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import { API } from '../backend'
import { useCart } from '../Hooks/useCart'
import { useUserInfo } from '../Hooks/useUserInfo'
import { postOrderItem } from '../Helper/postOrderItem'
import { useProducts } from '../Hooks/useProducts'
import { useFocusEffect } from '@react-navigation/core'
import { postFavourite } from '../Helper/postFavourite'
import { deleteFavProduct } from '../Helper/deleteFavProduct'
import { useOrderItems } from '../Hooks/useOrderItem'

const ProductCard = ({ product }) => {

    const { numberItemsCart, setNumberItemsCart } = useCart() //*
    const { favList, setFavList } = useProducts() //*
    const { userInfo, token, order } = useUserInfo()
    const { orderItemList } = useOrderItems()

    const [icon, setIcon] = useState('heart')
    const [isAdded, setIsAdded] = useState(false)


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
        return <Text> {totalRating} </Text>
    }

    const onAddDeleteFavourite = () => {
        if (icon === 'heart') {
            postFavourite(token, userInfo.username, product.id)
            setFavList(oldArray => [...oldArray, product])
            setIcon('times')
        } else if (icon === 'times') {
            deleteFavProduct(token, product.id)
            let newFavList = favList.filter((item) =>
                item.id != product.id
            )
            setFavList(newFavList)
            setIcon('heart')
        }
    }

    useFocusEffect(
        useCallback(() => {

            const isFav = favList.some((fav) => fav.id === product.id)
            const isProductAdded = orderItemList.some((item) => item.productId === product.id)

            if (isFav) {
                setIcon('times')
            } else {
                setIcon('heart')
            }
            if (isProductAdded) {
                setIsAdded(true)
            } else {
                setIsAdded(false)
            }

        }, [favList, orderItemList])
    );

    return (
        <View style={styles.root} >
            <View style={styles.mainContainer}>
                <View style={styles.imagenContainer}>
                    <Image style={styles.image} source={{ uri: API + product.image }} />
                </View>
                <View style={styles.likeContainer} >
                    <TouchableOpacity onPress={onAddDeleteFavourite}  >
                        <Icon
                            name={icon}
                            color='orange'
                            size={27}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.name} >  {product.name} </Text>
                <Text style={styles.description} numberOfLines={2} >  {product.description} </Text>
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
                    }}
                        activeOpacity={isAdded ? 1 : 0.2}
                        onPress={onAddToCart}>
                        <Text>{isAdded ? 'Añadido!' : 'Lo quiero'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginLeft: 7,
        width: 150,
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
        height: 300,
        flexDirection: 'column',

    },
    imagenContainer: {

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


export default ProductCard
