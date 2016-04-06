import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CardActions from '../actions/CardActions';
import { AddButton } from '../components';

@connect(state => ({
    cardlist: state.cardlist
}))

export default class CardApp extends Component {

    static propTypes = {
        cardById: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render () {
        const { cardlist: { cardById }, dispatch } = this.props;
        const actions = bindActionCreators(CardActions, dispatch);

        return (
            <AddButton onClick={() => this.props.addCard('New')} />
        );
    }
}