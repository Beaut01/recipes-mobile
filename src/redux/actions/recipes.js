import { DATA } from '../../data'
import { LOAD_RECIPES } from '../types'

export const loadRecipes = () => ({
    type: LOAD_RECIPES,
    payload: DATA
})