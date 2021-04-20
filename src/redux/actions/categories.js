import {CHANGE_CATEGORY} from '../types'

export const changeCategory = id => ({
    type: CHANGE_CATEGORY,
    payload: id
})