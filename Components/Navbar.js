import React, {useState} from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

const Navbar = () => {

    const [searchText, setSearchText] = useState('')

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
    }
})

export default Navbar;