import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CardApp from '../components/CardApp';
import cards from '../reducers/Cards';

const store = createStore(cards);

export default class App extends Component {
    render() {
        <Provider store={store}>
            {() => <CardApp /> }
        </Provider>
    }
}
