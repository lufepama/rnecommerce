import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { API } from '../backend'

const ProductCheckout = ({product, onDelete}) => {

    return (
        <View style={style.root}>
            <View style={style.mainContainer} >
                <View style={style.imageContainer} >
                    <Image style={style.image} source={{ uri:API+product.image}} />
                </View>
                <View style={style.productContainer}  >
                    <View style={style.descriptionContainer} >
                        <Text style={style.name}> {product.name} </Text>
                    </View>
                    <View style={style.amountContainer} >
                        <TouchableOpacity>
                            <Icon 
                                style={style.signIcon}
                                name='minus-square'
                                color='orange'
                                size={25}
                            />
                        </TouchableOpacity>
                        
                        <View>
                            <Text style={style.amount} >1</Text>
                        </View>
                        <TouchableOpacity>
                                
                            <Icon 
                                style={style.signIcon}
                                name='plus-square'
                                color='orange'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.priceDeleteContainer} >
                        <View style={style.priceContainer} >
                            <Text style={style.price} >{product.subtotal}€</Text>
                        </View> 
                        <View>
                            <TouchableOpacity style={style.trashBtn} onPress={()=>onDelete(product.id)} >
                                <Icon 
                                    name='trash'
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View> 
                    </View>
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
        marginBottom:10,
        shadowColor: "#000",
        borderRadius:20,
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
        flex:1,
        width:320,
    },
    imageContainer:{
        width:140,
        height:120,
        marginRight:20,
        alignItems:'flex-end'
    },
    image:{
        width:120,
        height:150,
        resizeMode:'contain',
    },
    descriptionContainer: {
        flexDirection:'column',
        justifyContent:'flex-start',
        flex:1
    },
    name:{
        justifyContent:'flex-start'
    },
    productContainer : {
        flexDirection:'column',
        flex:1
    },
    amountContainer:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    signIcon:{
        marginTop:3,
    },
    priceDeleteContainer: {
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        paddingRight:10
    },
    amount: {
        fontSize:17,
        fontWeight:'bold',
        marginLeft:10,
        marginRight:10
    },
    trashBtn : {
        justifyContent:'center',
        alignItems:'center',
        height:30,
        borderRadius:10,
    },
    priceContainer: {
        marginTop:5
    },
    price : {
        fontSize:17
    }
})

export default ProductCheckout
