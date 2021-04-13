import React from 'react'
import { View, TouchableNativeFeedback, ImageBackground, StyleSheet, Text } from 'react-native'

export const Recipe = ({onOpen}) => {
    return(
        <TouchableNativeFeedback onPress={() => onOpen}>
            <View style={styles.recipe}>
                <ImageBackground style={styles.image} source={{ uri: 'https://www.gastronom.ru/binfiles/images/20180216/b7343f01.jpg'}}>
                    <View style={styles.textWrapp}>
                        <Text style={styles.title}>Луковый суп</Text>
                    </View>
                </ImageBackground>
                <View style={styles.ingr} >
                    <Text>Нужен лук и ещё лук, ну и ещё лук</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 250,
        width: '100%',
    },
    recipe:{
        width: '100%',
        overflow: 'hidden',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff'
    },
    title:{
        color: '#fff',
        fontSize: 18
    },
    textWrapp:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    ingr:{
        paddingVertical: 10,
        paddingHorizontal: 10,
    }
})