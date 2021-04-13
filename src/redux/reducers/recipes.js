import {LOAD_RECIPES} from '../types'

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
        default: 
            return state
    }
}