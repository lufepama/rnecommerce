import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useUserInfo } from '../Hooks/useUserInfo'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { deleteToken } from '../Helper/index'
import Spinner from 'react-native-loading-spinner-overlay';
import { getOrderId } from '../Helper/getOrderId'

const HomeScreen = ({ navigation }) => {
    
    const [isLoading, setIsLoading] = useState(false)
    const {userInfo, token, setOrder, setIsUserLogged} = useUserInfo()

    const onDeleteToken = () => {
        console.log('pressed')
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
                    setOrder(res.order)
                })
                .catch( (err) => console.log(err))
        }, [])
    );
    


    return (
        <View style={styles.root}>
            <View style={styles.topbar} >
                <Icon
                    style={styles.icon}
                    name='list-ul'
                    size={35}
                    color='white'
                />
                <Text style={styles.title} > Lista de tareas  </Text>
            </View>
            <TouchableOpacity onPress={onDeleteToken} >
                <Text > delete  </Text>
            </TouchableOpacity>
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: () => false
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#2B2B2D',
        marginTop:20,
        padding:20,
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