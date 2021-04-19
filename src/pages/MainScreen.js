import React from 'react'
import { StyleSheet, FlatList, Alert, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Recipe } from '../components/Recipe'
import { deleteRecipe, loadRecipes } from '../redux/actions/recipes'
import {Categories} from '../components/Categories'

export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const {recipes, loading} = useSelector(state => state.recipe)
    
    const handleOpenRecipe = recipe => {
        navigation.navigate('Recipe', {
            recipeID: recipe.id,
            recipeTitle: recipe.name
        })
    }

    const handleDeleteRecipe = id => {
        Alert.alert(
            "Удаление рецепта.",
            "Точно хотите удалить этот рецепт?",
            [
              {
                text: "Закрыть",
                style: "cancel"
              },
              { text: "Удалить",
                style: 'destructive', 
                onPress() {
                    dispatch(deleteRecipe(id))
                }
            }
            ],
            { cancelable: true }
          )
    }

    React.useEffect(() => {
        dispatch(loadRecipes())
    }, [dispatch])

    return(
        <View>
            <Categories />
            <FlatList 
                data={recipes}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Recipe recipe={item} onOpen={handleOpenRecipe} onDelete={handleDeleteRecipe} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})