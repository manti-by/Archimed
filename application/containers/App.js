import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import CardApp from '../containers/CardApp';
import DevTools from '../containers/DevTools'
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    { () => <CardApp /> }
                </Provider>
                <DevTools />
            </div>
        );
    }
}
