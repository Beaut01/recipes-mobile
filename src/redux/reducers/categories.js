import { CHANGE_CATEGORY } from "../types"

const initialState = {
    category: 33
}

export const categoriesReducers = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CATEGORY: 
            return {
                ...state, category: action.payload
            }
        default:
            return state
    }
}