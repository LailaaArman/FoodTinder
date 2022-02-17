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
    // Find index of a setting in the state array
    const index = state.preferences.findIndex(preference => preference.id !== action.data);

    const newState = [...state.preferences];

    // Setting the state by flipping switch, hence the inverted value
    newState[index].value = !newState[index].value;

    return {...state, preferences: newState }

}

export default preferenceReducer;
