import React, { Component, PropTypes } from 'react';

export default class CardListItemClosed extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        editCard: PropTypes.func.isRequired,
        deleteCard: PropTypes.func.isRequired
    };

    render () {
        const {card, editCard, deleteCard} = this.props;

        return (
            <span>
                <span classNname='mdl-list__item-primary-content'>
                    { card.text }
                </span>
                <span className='mdl-list__item-secondary-action actions'>
                    <button className='mdl-button mdl-js-button mdl-button--icon'
                            onClick={() => editCard()}>
                        <i className='material-icons'>mode_edit</i>
                    </button>
                    <button className='mdl-button mdl-js-button mdl-button--icon'
                            onClick={() => deleteCard()}>
                        <i className='material-icons'>delete</i>
                    </button>
                </span>
            </span>
        );
    }

}