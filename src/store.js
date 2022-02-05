import { createStore, combineReducers } from 'redux';
import dishReducer from './reducers/dishReducer';

const rootReducer = combineReducers({
    dishReducer: dishReducer
})

export const store = createStore(rootReducer);
