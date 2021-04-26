import { LOAD_RECIPES, ADD_RECIPE, DELETE_RECIPE } from '../types'
import axios from 'axios'

export const fetchRecipes = () => async dispatch => {
    const response = await axios.get('https://recipes-mobile-eca70-default-rtdb.firebaseio.com/recipes.json')
    const data = response.data
    const items = Object.keys(response.data).map(key => ({...data[key], id: key}))
    dispatch(loadRecipes(items))
}

export const loadRecipes = items => ({
    type: LOAD_RECIPES,
    payload: items
})

export const addRecipe = obj => async dispatch => {
    await axios.post('https://recipes-mobile-eca70-default-rtdb.firebaseio.com/recipes.json', obj)
}

export const deleteRecipe = id => async dispatch => {
    await axios.delete(`https://recipes-mobile-eca70-default-rtdb.firebaseio.com/recipes/${id}.json`)
}