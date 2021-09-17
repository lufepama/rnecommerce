import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { signin } from '../Helper/signin'
import { useUserInfo } from '../Hooks/useUserInfo'
import { saveToken } from '../Helper'
import FormButton from './FormButton'

const SigninForm = () => {

    const [userdata, setUserdata] = useState({
        username:'reactnative',
        password:'trial'
    })

    const {username, password} = userdata
    const {userInfo, setUserInfo, order, token, setToken, setOrder,isUserLogged, setIsUserLogged} = useUserInfo()
    
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

    return (
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
                    <FormButton text='Login' onSubmit={onSubmit} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
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

export default SigninForm;