import React, {useEffect, useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input } from 'react-native-elements'
import FormButton from '../Components/FormButton'
import Icon from 'react-native-vector-icons/FontAwesome'
import { signup } from '../Helper/signup'

const SignupForm = () => {

    const [userdata, setUserdata] = useState({
        username:'reactnative',
        password:'trial',
        repassword:'trial',
        email:'prueba@gmail.com',
        errorMessage:'',
        isThereError:false,
        successMessage:'',
    })

    const {username, email, password, repassword, isThereError, errorMessage, successMessage} = userdata

    const onSubmit = () => {
        if (password !=repassword){
            setUserdata({...userdata, errorMessage:'Las contraseñas no coinciden', isThereError:true})
        } else {
            setUserdata({...userdata, errorMessage:'', isThereError:false})
            signup(username, email, password)
                .then( (res) => {
                    if (res.success) {
                        setUserdata({...userdata, successMessage:res.success})
                    }
                } )
        }
    }


    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='username'
                    style={styles.input}
                    value={username}
                    onChangeText={(newUsername)=>
                        setUserdata({...userdata, username:newUsername})
                    }
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
                    placeholder='email'
                    style={styles.input}
                    value={email}
                    onChangeText={(newEmail)=>setUserdata({...userdata, email:newEmail})}
                    leftIcon={
                        <Icon
                            style={styles.formIcon}
                            name='at'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input 
                    placeholder='password'
                    style={styles.input}
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
                <Input 
                    placeholder='password'
                    style={styles.input}
                    value={repassword}
                    onChangeText={(newPassword)=>setUserdata({...userdata, repassword:newPassword})}
                    leftIcon={
                        <Icon
                            style={styles.formIcon}
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                />
                {
                    isThereError && <Text style={styles.errorMessage} h1> {errorMessage} </Text>
                }
                <Text style={styles.successMessage} h4> {successMessage} </Text>
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
    },
    errorMessage:{
        color:'red'
    }
})


export default SignupForm