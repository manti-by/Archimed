import { SAVE_CARD, DELETE_CARD } from '../constants/ActionTypes';

var request;

// Push state to server and return
export default function sync(state = [], action) {
    switch (action.type) {
        case SAVE_CARD:
        case DELETE_CARD:
            request && request.abort();
            request = $.post('/api', JSON.stringify(state));
    }
    return state;
}