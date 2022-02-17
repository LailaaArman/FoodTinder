import { createStore, combineReducers } from 'redux';
import dishReducer from './reducers/dishReducer';
import cookbookReducer from './reducers/cookbookReducer';
import preferenceReducer from './reducers/preferenceReducer';

const rootReducer = combineReducers({
    dishReducer: dishReducer,
    cookbookReducer: cookbookReducer,
    preferenceReducer: preferenceReducer
})

export const store = createStore(rootReducer);
