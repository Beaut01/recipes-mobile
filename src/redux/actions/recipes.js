import { DATA } from '../../data'
import { LOAD_RECIPES, ADD_RECIPE, DELETE_RECIPE } from '../types'

export const loadRecipes = () => ({
    type: LOAD_RECIPES,
    payload: DATA
})

export const addRecipe = obj => ({
    type: ADD_RECIPE,
    payload: obj
})

export const deleteRecipe = id => ({
    type: DELETE_RECIPE,
    payload: id
})