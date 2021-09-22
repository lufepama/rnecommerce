import React, {useEffect, useState} from 'react'
import { StyleSheet, TextInput,Text , View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useCart } from '../Hooks/useCart'

const Navbar = () => {

    const [searchText, setSearchText] = useState('')
    const { numberItemsCart } = useCart()

    return (
        <View style={styles.root} >
            <View style={styles.topbar} >
                <Icon
                    style={styles.brandIcon}
                    name='list-ul'
                    size={35}
                    color='orange'
                />
                <TextInput
                        style={styles.input}
                        onChangeText={(newText) => setSearchText(newText)}
                        autoCapitalize='none'
                        value={searchText}
                        placeholder="Buscar..."
                />
                <TouchableOpacity style={styles.searchBtn} >
                    <Icon
                        style={styles.searchIcon}
                        name='search'
                        size={30}
                        color='orange'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartBtn} >
                    <Icon
                        style={styles.cartIcon}
                        name='shopping-cart'
                        size={30}
                        color='orange'
                    />
                </TouchableOpacity>
                {numberItemsCart !=0 && <Text style={styles.itemsNumber}> {numberItemsCart} </Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        height:50,
    },
    topbar: {
        flexDirection:'row',
        paddingHorizontal:2
    },
    brandIcon: {
        marginTop:5
    },
    input: {
        height: 40,
        flex:2,
        marginTop: 5,
        marginLeft:5,
        padding: 10,
    },
    searchBtn: {
        marginTop:5,
        marginLeft:5,
        flex:1
    },
    cartBtn: {
        marginTop:5,
        marginLeft:5,
        flex:1
    },
    itemsNumber:{
        color:'green',
        fontWeight:'bold'
    }
})

export default Navbar;