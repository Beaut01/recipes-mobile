import React from 'react'
import { Text, ScrollView, StyleSheet, View, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'

export const RecipeScreen = ({route}) => {
    const recipeID = route.params?.recipeID
    const recipe = useSelector(({recipe}) => recipe.recipes.find(r => r.id === recipeID))
    
    return(
        <ScrollView >
            <ImageBackground style={styles.image} source={{uri: recipe.imageURL}} />
            <Text style={styles.title}>Список ингредиентов</Text>
            <View style={styles.body}>
                <Text>{recipe.ingredients}</Text>
            </View>
            <Text style={styles.title}>Способ приготовления</Text>
            <View style={styles.body}>
                <Text>{recipe.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 250,
        width: '100%'
    },
    title:{
        fontSize: 25,
        paddingLeft: 20,
        paddingVertical: 10
    },
    body:{
        paddingVertical: 5,
        paddingLeft: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 8,
        marginBottom: 15
    }
})