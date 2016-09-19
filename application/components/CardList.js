import React, { Component, PropTypes } from 'react';
import { List } from 'react-mdl';
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
                    <div className="card-list-empty">{__('There are no cards')}</div>
                </div>
            );
        }

        return (
            <div className="archimed-container mdl-grid">
                <div className="card-list-wrap">
                    <List className="card-list">
                        {
                            cards.map(card =>
                                <CardListItem key={card._id} card={card} {...actions} />
                            )
                        }
                    </List>
                </div>
            </div>
        )
    }
}
