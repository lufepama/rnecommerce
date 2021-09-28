import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import BottomTab from '../Components/BottomTab'
import Navbar from '../Components/Navbar'
import { useProducts } from '../Hooks/useProducts'
import ProductListFav from '../Components/ProductListFav'


const FavouriteScreen = ({ navigation }) => {

    const { favList } = useProducts()
    const [colours, setColours] = useState({
        home: 'orange',
        search: 'orange',
        fav: 'black',
        checkout: 'orange'
    })

    return (
        <View style={style.root}>
            <Navbar />
            <ScrollView>
                <Text>Favouritesmm</Text>
                {
                    favList.length != 0
                        ? <ProductListFav />
                        : <Text>No hay naaaah</Text>
                }
            </ScrollView>
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
    }
})

export default FavouriteScreen
