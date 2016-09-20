import React, { Component, PropTypes } from 'react';
import CardListItemOpened from './CardListItemOpened'
import CardListItemClosed from './CardListItemClosed'


export default class CardListItem extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        editCard: PropTypes.func.isRequired,
        saveCard: PropTypes.func.isRequired,
        deleteCard: PropTypes.func.isRequired
    };

    render () {
        const { card, editCard, saveCard, deleteCard } = this.props;

        if (card.opened) {
            return (<CardListItemOpened key={card._id} card={card} saveCard={saveCard} />);
        } else {
            return (<CardListItemClosed key={card._id} card={card} editCard={editCard} deleteCard={deleteCard} />);
        }
    }

}