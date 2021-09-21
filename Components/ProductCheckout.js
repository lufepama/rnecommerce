import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { API } from '../backend'

const ProductCheckout = ({product}) => {

    return (
        <View style={style.root}>
            <View style={style.mainContainer} >
                <View style={style.imageContainer} >
                    <Image style={style.image} source={{ uri:API+product.image}} />
                </View>
                <View style={style.descriptionContainer} >
                    <Text style={style.name}> {product.name} </Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        marginLeft:7,
        flex:1,
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
    mainContainer:{
        flexDirection:'row',
        flex:1
    },
    imageContainer:{
        width:140,
        height:150,
    },
    image:{
        
        width:140,
        height:150,
        resizeMode:'contain',
    },
    descriptionContainer: {
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    name:{
        justifyContent:'flex-start'
    }
})

export default ProductCheckout
