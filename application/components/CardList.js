import React, { Component, PropTypes } from 'react';
import CardListItem from './CardListItem';

export default class CardList extends Component {

    static propTypes = {
        cards: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const { cards, actions } = this.props;

        if (!cards || cards.length === 0) {
            return (
                <div className="archimed-container mdl-grid">
                    <div className="mdl-typography--headline mdl-cell archimed-header">Your cards</div>
                    <div className="card-list-empty">There are no cards</div>
                </div>
            );
        }

        return (
            <div className="archimed-container mdl-grid">
                <div className="mdl-typography--headline mdl-cell archimed-header">Your cards</div>
                <div className="card-list-wrap">
                    <ul className="card-list mdl-list">
                        {
                            cards.map(card =>
                                <CardListItem key={card.id} card={card} {...actions} />
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
