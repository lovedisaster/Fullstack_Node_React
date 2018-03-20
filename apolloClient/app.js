import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import RootComponent from './components/root';

render(
    <RootComponent/>, 
    document.currentScript.ownerDocument.getElementById('root')
);