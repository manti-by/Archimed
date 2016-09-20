import * as types from '../constants/ActionTypes';

export function addCard(name) {
    return {
        type: types.ADD_CARD,
        name
    };
}

export function editCard(card) {
    return {
        type: types.EDIT_CARD,
        card
    };
}

export function saveCard(card) {
    return {
        type: types.SAVE_CARD,
        card
    };
}

export function deleteCard(card) {
    return {
        type: types.DELETE_CARD,
        card
    };
}

export function loadCardList(cards) {
    return {
        type: types.LOAD_CARD_LIST,
        cards
    };
}

var request;
export function sync(action, data) {
    request && request.abort();
    request = $.post('/api', { action: action, data: JSON.stringify(data) });
}