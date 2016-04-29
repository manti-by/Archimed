import React, { Component, PropTypes } from 'react';
import CardListItem from './CardListItem';

export default class CardList extends Component {

    static propTypes = {
        cards: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    componentWillMount() {
        this.serverRequest = $.get('/api', function (result) {
            if (result.status == 200) {
                this.setState({ cards: result.data, actions: this.props.actions });
            }
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }
    
    render() {
        const { cards, actions } = this.props;

        return (
            <div className='archimed-container mdl-grid'>
                <div className='mdl-typography--headline mdl-cell archimed-header'>Your cards</div>
                <div className='card-list-wrap'>
                    <ul className='card-list mdl-list'>
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
