import { ADD_CARD, DELETE_CARD } from '../constants/ActionTypes';

const initialState = [{
    text: 'New Card',
    id: 0
}];

export default function cards(state = initialState, action) {
    switch (action.type) {
        case ADD_CARD:
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                text: action.text
            }, ...state];

        case DELETE_CARD:
            return state.filter(card =>
                card.id !== action.id
            );

        default:
            return state;
    }
}