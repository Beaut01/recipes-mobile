import { combineReducers } from 'redux'
import { recipesReducer } from './recipes'
import {categoriesReducers} from './categories'
 
export const rootReducer = combineReducers({
    recipe: recipesReducer,
    categories: categoriesReducers
})