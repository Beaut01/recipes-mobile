import React from 'react'
import { View, StyleSheet, TextInput, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Recipe } from '../components/Recipe'

export const SearchScreen = ({navigation}) => {
    const [value, onChangeValue] = React.useState('')
    const recipes = useSelector(({recipe}) => recipe.recipes)

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
    
    const filteredRecipes = recipes.filter(r => r.name.toLowerCase().includes(value.toLocaleLowerCase()))
    
    return(
        <View>
            <TextInput 
                style={styles.input} 
                value={value} 
                onChangeText={text => onChangeValue(text)}
                placeholder='Поиск по названию' 
            />
            <FlatList 
                data={filteredRecipes}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Recipe recipe={item} onOpen={handleOpenRecipe} onDelete={handleDeleteRecipe} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000',
        width: '95%',
        height: 40,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        marginHorizontal: '2.5%',
        marginBottom: 10
    }
})