import React, { Component, PropTypes } from 'react';

export default class CardListItem extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        saveCard: PropTypes.object.isRequired
    };

    render () {
        const {card, saveCard} = this.props;

        return (
            <span>
                <input type='text' name='name' value={card.name} />
                <button className="mdl-button mdl-js-button mdl-button--raised"
                        onClick={() => saveCard(card.id)}>
                    Save
                </button>
            </span>
        );
    }

}