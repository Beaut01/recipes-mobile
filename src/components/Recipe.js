import React from 'react'
import { View, TouchableNativeFeedback, ImageBackground, StyleSheet, Text } from 'react-native'

export const Recipe = ({onOpen, recipe, onDelete}) => {
    return(
        <TouchableNativeFeedback onPress={() => onOpen(recipe)} onLongPress={() => onDelete(recipe.id)}>
            <View style={styles.recipe}>
                <ImageBackground style={styles.image} source={{ uri: recipe.imageURL}}>
                    <View style={styles.textWrapp}>
                        <Text style={styles.title}>{recipe.name}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.ingr} >
                    <Text>{recipe.ingredients}</Text>
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