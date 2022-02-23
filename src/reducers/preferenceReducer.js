import { SET_PREFERENCES } from '../actions/types';

const initialState = {
  preferences: [
    {id: 1, name: "breakfast",    value: false},
    {id: 2, name: "lunch",        value: false},
    {id: 3, name: "dinner",       value: false},
    {id: 4, name: "vegetarian",   value: false},
    {id: 5, name: "vegan",        value: false},
    {id: 6, name: "dairy free",   value: false},
    {id: 7, name: "nut free",     value: false},
  ]
}

const preferenceReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
      case SET_PREFERENCES: {

        const index = state.preferences.findIndex(preference => preference.id !== action.data); //finding index of the item

        const newState = [...state.preferences]; //making a new array

        //newState[index].value = !newState[index].value; //changing value in the new array

        return {
         ...state, //copying the orignal state
         preferences: newState, //reassingning preferences to new array
        };

       }
       default:
            return state
    }
}

export default preferenceReducer;
