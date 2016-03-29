import * as types from '../constants/ActionTypes';

export function addCard(name) {
    return {
        type: types.ADD_CARD,
        name
    };
}

export function deleteCard(id) {
    return {
        type: types.DELETE_CARD,
        id
    };
}
