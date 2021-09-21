import React, { useState } from 'react'
import { View, StyleSheet, Text , ScrollView} from 'react-native'
import Navbar from '../Components/Navbar'
import BottomTab from '../Components/BottomTab'

const SearchScreen = ({ navigation }) => {

    const [colours, setColours] = useState({
        home:'orange',
        search:'black',
        fav:'orange',
        checkout:'orange'
    })

    return (
        <View style={style.root}>
            <Navbar/>
            <ScrollView>
                <Text>Favourite</Text>
            </ScrollView>
            <BottomTab colours={colours} navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        backgroundColor:'#FEFDFA',
        marginTop:20,
        padding:10,
        textAlign:'center',
        flex:1,
    }
})

export default SearchScreen
