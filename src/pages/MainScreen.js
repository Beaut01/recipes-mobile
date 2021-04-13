import React from 'react'
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native'

import { Recipe } from '../components/Recipe'

export const MainScreen = ({navigation}) => {

    const handleOpenRecipe = () => {
        navigation.navigate('Recipe')
    }

    return(
        <ScrollView>
            <Recipe onOpen={handleOpenRecipe} />
            <Recipe />
            <Recipe />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})