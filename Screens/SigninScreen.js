import React, { useState, useCallback } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import FormButton from '../Components/FormButton'
import NavLink from '../Components/NavLink'
import { useUserInfo } from '../Hooks/useUserInfo' 
import { saveToken } from '../Helper/index'
import { signin } from '../Helper/signin'
import { useFocusEffect } from '@react-navigation/native'

const SigninScreen = ({ navigation }) => {

    const [userdata, setUserdata] = useState({
        username:'reactnative',
        password:'trial'
    })

    const {username, password} = userdata
    const {userInfo, setUserInfo, order, token,setToken,setOrder,isUserLogged, setIsUserLogged} = useUserInfo()

    const onSubmit = () => {
        signin(username, password) 
        .then( (res) => {
            console.log(res)
            if (res.success) {
                saveToken(res.token)
                setToken(res.token)
                setUserInfo({...userInfo, username:res.username, firstName:res.firstName,lastName:res.lastName, email:res.email, token:res.token})
                setIsUserLogged(true)
            }
        } )
        .catch( (err) => {
            console.log(err)
        } )
    }

    useFocusEffect( 
        React.useCallback( () =>{

            console.log('signin montado', token)

        },[] )
    )


    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text  style={styles.title} h1>Signin</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        style={styles.input}
                        placeholder='username'
                        autoCapitalize= 'none'
                        value={username}
                        onChangeText={(newUsername)=> setUserdata({...userdata, username:newUsername})}
                        leftIcon={
                            <Icon
                                style={styles.formIcon}
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input 
                        style={styles.input}
                        placeholder='password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(newPassword)=>setUserdata({...userdata, password:newPassword})}
                        leftIcon={
                            <Icon
                                style={styles.formIcon}
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <NavLink navigation={navigation} text='No tienes cuenta? Ve a la pagina de registro!' routeName='Signup' />
                    <FormButton text='Login' onSubmit={onSubmit} />
                </View>
            </View>
        </View>
    )
}

SigninScreen.navigationOptions = {
    header: () => false
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#2B2B2D',
        marginTop:20,
        paddingTop:20,
        textAlign:'center',
        flex:1
    },
    titleContainer:{
        alignItems:'center',
    },
    title:{
        color:'#FFFFFF'
    },
    formContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:380,
    },
    inputContainer:{
        width:250,
    },
    formIcon:{
        color:'#DEE2F6'
    },
    input:{
        color:'#FFFFFF'
    }
})

export default SigninScreen;