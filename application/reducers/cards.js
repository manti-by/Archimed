import * as types from '../constants/ActionTypes';
import { sync } from '../actions/CardActions';
import { getCardResult, getCardFullVolume, getCardLabel } from '../actions/CalcActions';
import { forecastSolutionVolume } from '../actions/FetmanForecast';


export default function cards(state = [], action) {
    switch (action.type) {
        case types.ADD_CARD:
            var card = {
                    id          : (state.length === 0) ? 1 : state[0].id + 1,
                    tab_id      : 0,
                    from_deg    : 90,
                    from_vol    : 220,
                    to_deg      : 40,
                    water_temp  : 20,
                    spirit_temp : 20,
                    opened      : true
                };

            card.result = getCardResult(card);
            card.to_vol = getCardFullVolume(card);
            card.text = getCardLabel(card);
            card.forecast_vol = forecastSolutionVolume(
                card.result, card.water_temp, card.from_vol, card.spirit_temp, card.from_deg
            );
            return [card, ...state];

        case types.EDIT_CARD:
            return state.map(function(card) {
                if (card.id == action.id) {
                    card.opened = true;
                }
                return card;
            });

        case types.SAVE_CARD:
            return sync(state.map(function(card) {
                if (card.id == action.card.id) {
                    card = action.card;
                    card.opened = false;
                }
                return card;
            }));

        case types.DELETE_CARD:
            return sync(state.filter(card =>
                card.id !== action.id
            ));

        case types.LOAD_CARD_LIST:
            return state.concat(action.cards);

        default:
            return state;
    }
}