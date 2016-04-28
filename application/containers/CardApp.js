import '../assets/css/base.css'

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddButton from '../components/AddButton';
import CardList from '../components/CardList';
import * as CardActions from '../actions/CardActions';


class CardApp extends Component {

    componentDidMount() {
        this.serverRequest = $.get('/api', function (result) {
            this.setState(result);
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        const { cards, actions } = this.props;

        return (
            <div>
                <CardList cards={cards} actions={actions} />
                <AddButton onClick={actions.addCard} />
            </div>
        );
    }
}

function mapState(state) {
    return {
        cards: state.cards
    };
}

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(CardActions, dispatch)
    };
}

export default connect(mapState, mapDispatch)(CardApp);