import { ADD_DISH, DELETE_DISH } from '../actions/types';

const initialState = {
    dish: null,
    dishes: [
        {
          id: 0,
          name: "tacos",
          price: "80kr",
          instructions: "slice some cucumber",
          uri: require("../../assets/dishes/tacos.jpg"),
        },
        {
          id: 1,
          name: "Stuvade makaroner",
          price: "70kr",
          instructions: "stuva makaronerna",
          uri: require("../../assets/dishes/stuvademakaroner.jpg"),
        },
        {
          id: 2,
          name: "Ris med wok",
          price: "85kr",
          instructions: "wooka grönsakerna",
          uri: require("../../assets/dishes/wok.jpeg"),
        },
      ],
    likedDishes: []
}

const dishReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DISH:
            return {...state, 
                likedDishes: state.likedDishes.concat({
                    data: action.data
                })
            };
        case DELETE_DISH:
            return {...state,
                counter: state.counter - 1
            };
        default:
            return state
    } 
} 

export default dishReducer;