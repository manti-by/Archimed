import { SAVE_CARD, DELETE_CARD } from '../constants/ActionTypes';

var request;

// Push state to server and return
export default function sync(state = []) {
    request && request.abort();
    request = $.post('/api', { data: JSON.stringify(state) });
    return state;
}