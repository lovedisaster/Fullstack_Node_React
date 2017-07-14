import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './route';

import configureStore from './stores/configStore';
import { Provider } from 'react-redux';

import {loadProperties} from './actions/propertyActions';


const store = configureStore();
//Init store by async call

store.dispatch(loadProperties());

render(
    <Provider store={store}>
       <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.currentScript.ownerDocument.getElementById('root')
);