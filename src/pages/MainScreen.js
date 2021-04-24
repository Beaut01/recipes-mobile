import React from 'react'
import { StyleSheet, FlatList, Alert, View, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Recipe } from '../components/Recipe'
import { deleteRecipe, loadRecipes } from '../redux/actions/recipes'
import {Categories} from '../components/Categories'
import { Ionicons } from '@expo/vector-icons'

export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const {recipes, loading} = useSelector(state => state.recipe)
    const activeCategory = useSelector(({categories}) => categories.category )
    
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
    }, [dispatch, activeCategory])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Ionicons size={30} style={styles.search} name='search' />
                </TouchableOpacity>
            )
        })
    },[navigation])

    const filteredRecipes = recipes.filter(r => r.category === activeCategory)

    let data

    if (activeCategory === 33) {
        data = recipes
    } else {
        data = filteredRecipes
    }

    const getHeader = () => {
        return <Categories />
    }

    return(
        <View>
            <FlatList 
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Recipe recipe={item} onOpen={handleOpenRecipe} onDelete={handleDeleteRecipe} />}
                ListHeaderComponent={getHeader}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    search: {
        paddingRight: 10,
        color: '#fff'
    }
})