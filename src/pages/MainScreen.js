import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Recipe } from '../components/Recipe'
import { loadRecipes } from '../redux/actions/recipes'

export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const {recipes, loading} = useSelector(state => state.recipe)
    
    const handleOpenRecipe = recipe => {
        navigation.navigate('Recipe', {recipeID: recipe.id})
    }

    React.useEffect(() => {
        dispatch(loadRecipes())
    }, [dispatch])

    return(
        <FlatList 
            data={recipes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Recipe recipe={item} onOpen={handleOpenRecipe} />}
        />
    )
}

const styles = StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})