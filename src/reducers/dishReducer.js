import { ADD_DISH, DELETE_DISH } from '../actions/types';

const initialState = {
    dish: null,
    likedDishes: []
}

const dishReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case ADD_DISH:
            return {...state, 
                likedDishes: state.likedDishes.concat({
                    key: Math.random(),
                    data: action.data
                })
            };
        case DELETE_DISH:
            return {...state,
                likedDishes: state.likedDishes.filter((item) => 
                item.key !== action.key)
            };
        default:
            return state
    } 
} 

export default dishReducer;