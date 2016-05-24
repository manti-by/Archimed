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

export function saveCard(card) {
    return {
        type: types.SAVE_CARD,
        card
    };
}

export function deleteCard(id) {
    return {
        type: types.DELETE_CARD,
        id
    };
}

export function loadCardList(cards) {
    return {
        type: types.LOAD_CARD_LIST,
        cards
    };
}

var request;
export function sync(state = []) {
    request && request.abort();
    request = $.post('/api', { data: JSON.stringify(state) });
    return state;
}

export function getCardResult(card) {
    var result = Math.round(card.from_vol * (card.from_deg / card.to_deg - 1));
    return result > 0 ? result : 'error';
}

export function getCardLabel(card) {
    return card.from_deg + '% / ' + card.from_vol + 'ml' +
        ' > ' + card.to_deg + '% / ' + card.to_vol + 'ml' +
        ' = ' + card.result + 'ml';
}
