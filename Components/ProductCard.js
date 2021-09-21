import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import {API} from '../backend'
import { useCart } from '../Hooks/useCart'
import { useUserInfo } from '../Hooks/useUserInfo'
import { postOrderItem } from '../Helper/postOrderItem'

const ProductCard = ({ product }) => {

    const { numberItemsCart, setNumberItemsCart } = useCart()
    const { token, order } = useUserInfo()

    const onPress = () => {
        setNumberItemsCart(numberItemsCart + 1)
        postOrderItem(product.id, order, token)
            .then( (res) => console.log(res) )
    }

    const displayRating = () => {
        let totalRating = ''
        for (let i=0; i<product.rating; i++) {
            totalRating += '⭐'
        }
        return <Text> {totalRating} </Text>
    }

    return (
        <View style={styles.root} >
            <View style={styles.mainContainer}>
                <View style={styles.imagenContainer}>
                    <Image style={styles.image} source={{ uri: API+product.image }} />
                </View>
                <View style={styles.likeContainer}>
                    <TouchableOpacity>
                        <Icon
                            name='heart'
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
                        :null
                    }
                </View>
                
                {displayRating()}
                <TouchableOpacity style={styles.addBtn} onPress={onPress}>
                    <Text>Lo quiero</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginLeft:7,
        width:150,
        marginRight:7,
        shadowColor: "#000",
        paddingHorizontal:3,
        paddingVertical:8,
        borderWidth:0,
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
        flexDirection:'column',
        
    },
    imagenContainer: {
        
    },
    image: {
        width:140,
        height:150,
        resizeMode:'contain'
    },
    likeContainer: {
        position:'absolute',
        right:10,
        top:5,
    },
    description:{
        flex:1,
        flexWrap:'wrap',
        fontSize:13
    },
    name:{
        fontWeight:'bold',
    },
    pricingContainer:{
        flexDirection:'row',
        flex:0.5,
    },
    previousPrice:{
        textDecorationLine:'line-through',
        color:'red'
    },
    addBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
        height:30,
        borderRadius:10,
    }
})


export default ProductCard
