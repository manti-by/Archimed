import React, { Component, PropTypes } from 'react';

export default class CardListItem extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        deleteCard: PropTypes.func.isRequired
    };

    render () {
        const {card, deleteCard} = this.props;

        return (
            <li className='card-list-item mdl-list__item mdl-shadow--2dp'>
                <span classNname='mdl-list__item-primary-content'>
                    {card.name || new Date().toJSON().slice(0,10)}
                </span>
                <span className='mdl-list__item-secondary-action'>
                    <button className='mdl-button mdl-js-button mdl-button--icon'
                            onClick={() => deleteCard(card.id)}>
                        <i className='material-icons'>delete</i>
                    </button>
                </span>
            </li>
        );
    }

}