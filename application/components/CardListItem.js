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
        const {card, editCard, saveCard, deleteCard} = this.props;

        var content;
        if (card.opened) {
            content = <CardListItemOpened key={card.id} card={card}
                                          saveCard={() => saveCard(card.id)} />
        } else {
            content = <CardListItemClosed key={card.id} card={card}
                                          editCard={() => editCard(card.id)}
                                          deleteCard={() => deleteCard(card.id)} />
        }

        return (
            <li className='card-list-item mdl-list__item mdl-shadow--2dp'>
                {content}
            </li>
        );
    }

}