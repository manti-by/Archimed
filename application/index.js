import './node_modules/react-mdl/extra/material.min.css'
import './node_modules/react-mdl/extra/material.min.js'

import React from 'react'
import { render } from 'react-dom';
import configureStore from './store/configure';
import App from './containers/App';

const store = configureStore();

render(
    <App store={store} />,
    document.getElementById('root')
);