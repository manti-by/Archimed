import { ADD_CARD, EDIT_CARD, SAVE_CARD, DELETE_CARD } from '../constants/ActionTypes';

const initialState = [{
    text: 'New Card',
    id: 0
}];

export default function cards(state = initialState, action) {
    switch (action.type) {
        case ADD_CARD:
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                text: action.text || new Date().toJSON().slice(0,10)
            }, ...state];

        case EDIT_CARD:
            return state.map(function(card) {
                if (card.id == action.id) card.opened = true;
                return card;
            });

        case SAVE_CARD:
            return state.map(function(card) {
                if (card.id == action.id) {
                    card.opened = false;
                    card.text = action.text;
                }
                return card;
            });

        case DELETE_CARD:
            return state.filter(card =>
                card.id !== action.id
            );

        default:
            return state;
    }
}