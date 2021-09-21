import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Animated, StyleSheet, Dimensions, Image, Button } from 'react-native'
import { API } from '../backend'

const MAX_WIDTH = Dimensions.get('screen').width


const Caraousel = ({ data }) => {

    const animation = useRef(new Animated.Value(1))
    const [currentImage, setCurrentImage] = useState(1)

    setInterval( () => handleAnimation(), 6000 )


    const handleAnimation = () => {
        console.log('pressed')
        let newCurrentImage = currentImage + 1

        if (newCurrentImage >= data.length) {
            newCurrentImage= 0
        }

        Animated.spring(animation.current, {
            toValue: -(MAX_WIDTH * newCurrentImage),
            useNativeDriver: true
        }).start()

        setCurrentImage(newCurrentImage)
    }

    return (
        <React.Fragment>
            <View>
                <Animated.View style={[styles.container, {
                    transform: [ {translateX:animation.current} ],
                }]} >
                    
                    {data.map(item => 
                        <Image key={item.id.toString()} style={styles.image} source={{ uri:API+item.image }} />
                        
                    )}

                </Animated.View>
                <View style={styles.indicatorContainer} >
                    {data.map((item, index) => (
                        <View key={`${item}_${index}`} style={[styles.indicator, index === currentImage? styles.activeIndicator : undefined]}></View>
                    ))}
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },  
    image: {
        height:150,
        resizeMode:'contain',
        width:MAX_WIDTH
    },
    indicatorContainer:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width: MAX_WIDTH,
        bottom:10,
        zIndex:2
    },
    indicator: {
        width:15,
        height:15,
        borderRadius:10,
        borderWidth:1,
        borderColor:'white',
        marginHorizontal:10,
        marginBottom:10
    },
    activeIndicator : {
        backgroundColor: 'white'
    }
})


export default Caraousel
