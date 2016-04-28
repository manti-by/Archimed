import { combineReducers } from 'redux';
import cards from './cards';
import sync from './sync';

const rootReducer = combineReducers({
    cards, sync
});

export default rootReducer;
