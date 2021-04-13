import { combineReducers } from 'redux'
import { recipesReducer } from './recipes'
 
export const rootReducer = combineReducers({
    recipe: recipesReducer
})