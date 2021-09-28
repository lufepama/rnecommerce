import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import Navbar from '../Components/Navbar'
import { useProducts } from '../Hooks/useProducts'
import ImageCarousel from '../Components/ImageCarousel'
import ProductList from '../Components/ProductList'
import BottomTab from '../Components/BottomTab'

const HomeScreen = ({ navigation }) => {

    const { products } = useProducts()

    const [colours, setColours] = useState({
        home: 'black',
        search: 'orange',
        fav: 'orange',
        checkout: 'orange'
    })

    return (
        <View style={styles.root}>
            <Navbar />
            <ScrollView>
                <ImageCarousel data={products} />
                <View style={styles.productList}>
                    <ProductList />
                </View>
            </ScrollView>
            <BottomTab colours={colours} navigation={navigation} />
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: () => false
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FEFDFA',
        marginTop: 20,
        padding: 10,
        textAlign: 'center',
        flex: 1,
    },
    topbar: {
        flexDirection: 'row'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    number: {
        fontSize: 20,
        color: 'red',
        marginTop: 12
    },
    icon: {
        marginTop: 10,
    },
    taskListContainer: {
        marginTop: 20,
        flex: 1,
    },
    plusBtn: {
        flexDirection: 'row-reverse'
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    productList: {
        marginTop: 15
    },
    bottomTabContainer: {
        height: 50,
    }
})

export default HomeScreen;