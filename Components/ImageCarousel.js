import React, { useEffect, useState, useCallback } from 'react'
import { View,
    StyleSheet, 
    Text, 
    Image,
    FlatList,
    useWindowDimensions
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { API } from '../backend'

const ImageCarousel = ({ data }) => {
    
    const [activeIndex, setActiveIndex] = useState(2)
    const windowWidth = useWindowDimensions().width

    return (
        <View style={styles.root} >
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth-40}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold:50, 
                }}
                onViewableItemsChanged={({viewableItems})=>
                    console.log(viewableItems)
                }
                renderItem={({item}) =>
                    <Image
                        style={[styles.myImage, {width: windowWidth - 20}]} 
                        source={{ uri:(API+item.image) }}
                    />
                }
            />
            <View style={styles.dots} >
                {data.map( (data, index) => (
                    <View 
                        style={[
                            styles.dot,
                            {
                                backgroundColor: index === activeIndex ? '#c9c9c9':'#ededed'
                            }
                            ]} >

                    </View>
                ) )}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        
    },
    myImage: {
        margin:10,
        height:150,
        resizeMode:'contain',
    },
    dot: {
        width:10,
        height:10,
        borderRadius:25,
        borderWidth:1,
        backgroundColor:'#ededed',
        borderColor:'#c9c9c9',
        margin:5
    },
    dots: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }

})

export default ImageCarousel