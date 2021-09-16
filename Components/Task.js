import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Task = ({item , onDelete, onUpdate} ) => {


    return (
        <View style={styles.root}>
            <View style={styles.descriptionBtns}> 
                <Text style={styles.description} numberOfLines={1} > {item.task} </Text>
                <TouchableOpacity
                    style={styles.iconEdit}
                    onPress={onUpdate}
                >
                    <Icon
                        name='edit'
                        size={30}
                        color='white'
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconTrash}
                    onPress={onDelete}
                >
                    <Icon
                        name='trash-o'
                        size={30}
                        color='white'
                    />
                </TouchableOpacity>
            </View>
            <Text> {item.created_at} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: { 
        height: 50,
        borderWidth:1,
        borderColor:'#343434',
        backgroundColor:'#545454',
        paddingHorizontal:10,
        marginBottom:10
    },
    descriptionBtns:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    descriptionContainer:{
        width:100
    },  
    description: {
        fontSize:18,
        color:'white',
        flex:0.65
    },
    iconTrash: {
        position:'absolute',
        right:5,
        top:8
    },
    iconEdit: {
        position:'absolute',
        right:50 ,
        top:10
    }
})

export default Task;