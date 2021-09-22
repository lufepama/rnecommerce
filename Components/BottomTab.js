import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomTab = ({ navigation, colours}) => {
    
    const {home, search, fav, checkout} = colours

    return (
        <View style={style.root} >
            <View style={style.mainContainer} >
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <Icon
                        name='home'
                        size={30}
                        color={home}
                    />
                    <Text  >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} >
                    <Icon
                        name='search'
                        size={30}
                        color={search}
                    />
                    <Text  >Buscar</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() =>  navigation.navigate('Favourite') }>
                    <Icon
                        style={style.icon}
                        name='heart'
                        size={30}
                        color={fav}
                    />
                    <Text >Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart') }>
                    <Icon
                        style={style.icon}
                        name='shopping-cart'
                        size={30}
                        color={checkout}
                    />
                    <Text >Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        height:60,
    },
    mainContainer: {
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    icon:{
        marginLeft:10
    }
})

export default BottomTab
