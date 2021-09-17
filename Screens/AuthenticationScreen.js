import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input } from 'react-native-elements'
import SigninForm from '../Components/SigninForm'
import SignupForm from '../Components/SignupForm'

const AuthenticationScreen = () => {

    const [underline, setUnderline] = useState(false)

    const onSigninPress = () => {
        setUnderline(false)
    }

    const onRegisterPress = () => {
        setUnderline(true)
    }

    return (
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text  style={styles.title} h1>Ecomm</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={ (underline)? styles.buttons : styles.buttonsUnderline } onPress={onSigninPress} >
                        <Text  h4 > Sign In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ (!underline)? styles.buttons : styles.buttonsUnderline } onPress={onRegisterPress} >
                        <Text h4 > Registrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.formContainer} >
                {
                    underline
                    ? <SignupForm/>
                    : <SigninForm/>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#2B2B2D',
        marginTop:20,
        paddingTop:20,
        textAlign:'center',
        flex:1
    },
    titleContainer:{
        alignItems:'center',
        flex:2,
        marginTop:10
    },
    title:{
        color:'#FFFFFF'
    },
    bodyContainer:{
        flexDirection:'column',
        flex:3,
        alignItems:'center',
    },
    formContainer:{
        flexDirection:'column',
        flex:10,
        alignItems:'center',
    },
    optionsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:250,
    },
    buttons: {
        height:50,
        width:100,
        backgroundColor: '#E7AE4A',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonsUnderline:{
        height:50,
        width:100,
        alignItems:'center',
        backgroundColor: '#E7AE4A',
        justifyContent:'center',
        borderBottomWidth:2,
        borderBottomColor:'red'
    }

})

export default AuthenticationScreen;