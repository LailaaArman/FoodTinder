import { SET_PREFERENCES } from '../actions/types';

const initialState = {
  preferences: [
    {id: 1, name: "Breakfast",    value: true},
    {id: 2, name: "Lunch",        value: true},
    {id: 3, name: "Dinner",       value: true},
    {id: 4, name: "Vegetarian",   value: true},
    {id: 5, name: "Vegan",        value: true},
    {id: 6, name: "Lactose free", value: true},
    {id: 7, name: "Nut free",     value: true}
  ]
}

const preferenceReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
      case SET_PREFERENCES: {
        
        const index = state.preferences.findIndex(preference => preference.id !== action.data); //finding index of the item
        
        const newState = [...state.preferences]; //making a new array
        
        newState[index].value = !newState[index].value;//changing value in the new array
       
        return { 
         ...state, //copying the orignal state
         preferences: newState, //reassingning preferences to new array
        };
        
       }
       default:
            return state
    }
     /*
    // Find index of a setting in the state array
    const index = state.preferences.findIndex(preference => preference.id !== action.payload );

    const newState = [...state.preferences];

    // Setting the state by flipping switch, hence the inverted value
    newState[index].value = !newState[index].value;

    return {...state, preferences: newState }
    */

}

export default preferenceReducer;
