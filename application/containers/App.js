import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardApp from '../containers/CardApp';
import DevTools from '../containers/DevTools';


export default class App extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <CardApp />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
