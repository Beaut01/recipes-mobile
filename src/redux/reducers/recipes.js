import {LOAD_RECIPES, ADD_RECIPE, DELETE_RECIPE} from '../types'

const initialState = {
    recipes: [],
    loading: true
}

export const recipesReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_RECIPES: 
            return{
                recipes: action.payload,
                loading: false
            }
        case ADD_RECIPE: 
            return{
                ...state,
                recipes: [{...action.payload}, ...state.recipes]
            }
        case DELETE_RECIPE:
            return{
                ...state, 
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            }
        default: 
            return state
    }
}