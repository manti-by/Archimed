import * as types from '../constants/ActionTypes';

const initialState = {
    cards: [1],
    cardsById: {
        1: {
            id: 1,
            name: 'Test Card'
        }
    }
};

export default function cards(state = initialState, action) {
    switch (action.type) {

        case types.ADD_CARD:
            const newId = state.cards[state.cards.length-1] + 1;
            return {
                ...state,
                cards: state.cards.concat(newId),
                cardsById: {
                    ...state.cardsById,
                    [newId]: {
                        id: newId,
                        name: action.name
                    }
                }
            };

        case types.DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(id => id !== action.id),
                cardsById: omit(state.cardsById, action.id)
            };

        default:
            return state;
    }
}