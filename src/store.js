import { createStore, combineReducers } from 'redux';
import dishReducer from './reducers/dishReducer';
import cookbookReducer from './reducers/cookbookReducer';

const rootReducer = combineReducers({
    dishReducer: dishReducer,
    cookbookReducer: cookbookReducer
})

export const store = createStore(rootReducer);
