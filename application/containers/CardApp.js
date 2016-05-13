import '../assets/css/base.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddButton from '../components/AddButton';
import CardList from '../components/CardList';
import * as CardActions from '../actions/CardActions';


class CardApp extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        this.serverRequest = $.get('/api', function (result) {
            if (result.status == 200) {
                this.setState({ cards: result.data });
            }
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        const actions = this.props.actions;

        return (
            <div>
                <CardList cards={this.state.cards} actions={actions} />
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