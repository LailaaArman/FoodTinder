import { ADD_FAVOURITE, DELETE_FAVOURITE} from './types'

export const addToFavourites = (dish) => ({
    type: ADD_FAVOURITE,
    data: dish
})

export const deleteFromFavourites = (key) => ({
    type: DELETE_FAVOURITE,
    key: key
})