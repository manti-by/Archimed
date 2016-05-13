import { ADD_CARD, EDIT_CARD, SAVE_CARD, DELETE_CARD } from '../constants/ActionTypes';
import { sync, getCardResult, getCardLabel } from '../actions/CardActions';


export default function cards(state = [], action) {
    switch (action.type) {
        case ADD_CARD:
            var card = {
                    id      : (state.length === 0) ? 1 : state[0].id + 1,
                    from_deg: 90,
                    from_vol: 220,
                    to_deg  : 40,
                    to_vol  : 500,
                    opened  : true
                };

            card.result = getCardResult(card);
            card.text = getCardLabel(card);

            return [card, ...state];

        case EDIT_CARD:
            return state.map(function(card) {
                if (card.id == action.id) {
                    card.opened = true;
                }
                return card;
            });

        case SAVE_CARD:
            return sync(state.map(function(card) {
                if (card.id == action.card.id) {
                    card = action.card;
                    card.opened = false;
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