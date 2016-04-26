import * as types from '../constants/ActionTypes';

export function addCard(name) {
    return {
        type: types.ADD_CARD,
        name
    };
}

export function editCard(id) {
    return {
        type: types.EDIT_CARD,
        id
    };
}

export function saveCard(id, text) {
    return {
        type: types.SAVE_CARD,
        id, text
    };
}

export function deleteCard(id) {
    return {
        type: types.DELETE_CARD,
        id
    };
}
