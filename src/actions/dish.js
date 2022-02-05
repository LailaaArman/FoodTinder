import { ADD_DISH, DELETE_DISH} from './types'

export const addDish = (dish) => ({
    type: ADD_DISH,
    data: dish
})

export const deleteDish = (key) => ({
    type: DELETE_DISH,
    key: key
})