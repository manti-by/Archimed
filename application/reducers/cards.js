import { ADD_CARD, EDIT_CARD, SAVE_CARD, DELETE_CARD } from '../constants/ActionTypes';
import sync from './sync';

export default function cards(state = [], action) {
    switch (action.type) {
        case ADD_CARD:
            var id = (state.length === 0) ? 1 : state[0].id + 1;
            return [{
                id      : id,
                text    : new Date().toJSON().slice(0,10) + ' ' + id,
                opened  : true
            }, ...state];

        case EDIT_CARD:
            return state.map(function(card) {
                if (card.id == action.id) {
                    card.opened = true;
                }
                return card;
            });

        case SAVE_CARD:
            return sync(state.map(function(card) {
                if (card.id == action.id) {
                    card.opened = false;
                    card.text = action.text;
                }
                return card;
            }));

        case DELETE_CARD:
            return sync(state.filter(card =>
                card.id !== action.id
            ));

        default:
            return state;
    }
}