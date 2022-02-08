import { ADD_FAVOURITE, DELETE_FAVOURITE } from '../actions/types';

const initialState = {
    dish: null,
    favouriteDishes: []
}

const cookbookReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case ADD_FAVOURITE:
            return {...state, 
                favouriteDishes: state.favouriteDishes.concat({
                    key: Math.random(),
                    data: action.data
                })
            };
        case DELETE_FAVOURITE:
            return {...state,
                favouriteDishes: state.favouriteDishes.filter((item) => 
                item.key !== action.key)
            };
        default:
            return state
    } 
} 

export default cookbookReducer;