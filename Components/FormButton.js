import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

const FormButton = ({text, onSubmit}) => {

    return (
        <TouchableOpacity style={style.sendBtn} onPress={onSubmit}>
            <Text style={style.sendBtnText} h3 >{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    sendBtn:{
        backgroundColor:'#ECEFFF',
    },
    sendBtnText: {
        textAlign:'center',
    }
})

export default FormButton