import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useUserInfo } from '../Hooks/useUserInfo'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { deleteToken } from '../Helper/index'
import Spinner from 'react-native-loading-spinner-overlay';
import { getOrderId } from '../Helper/getOrderId'
import Navbar from '../Components/Navbar'
import ImageCarousel from '../Components/ImageCarousel'
import { getProducts } from '../Helper/getProducts'
import { useProducts } from '../Hooks/useProducts'

const HomeScreen = ({ navigation }) => {
    
    const {userInfo, token, setOrder, setIsUserLogged} = useUserInfo()
    const [productList, setProductsList] = useState([])
    const [load, setLoad] = useState(false)
    const { products } = useProducts()

    const onDeleteToken = () => {
        deleteToken()
            .then( (res) => {
                if (res) {
                    setIsUserLogged(false)
                }
            } )
            .catch( (err) => console.log(err) )
    }


    useFocusEffect(
        useCallback(() => {
            getOrderId(userInfo.username, token)
                .then( (res) => {
                    console.log(res)
                    setOrder(res.order)
                })
                .catch( (err) => console.log(err))
        }, [])
    );

    return (
        <View style={styles.root}>
            <Navbar/>
            <ImageCarousel data={products} />
            <TouchableOpacity onPress={onDeleteToken} >
                <Text>DELETEEE</Text>
            </TouchableOpacity>
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: () => false
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#FEFDFA',
        marginTop:20,
        padding:10,
        textAlign:'center',
        flex:1,
    }, 
    topbar: {
        flexDirection:'row'
    },
    title: {
        color:'white',
        fontSize:35,
        fontWeight:'bold'
    },
    number: {
        fontSize:20,
        color:'red',
        marginTop:12
    },
    icon:{
        marginTop:10,
    },
    taskListContainer:{
        marginTop:20,
        flex:1,
    },
    plusBtn : {
        flexDirection:'row-reverse'
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    
})

export default HomeScreen;