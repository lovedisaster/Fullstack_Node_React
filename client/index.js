import React from 'react';
import { render } from 'react-dom';

render(
    <h1>This is react</h1>, 
    document.currentScript.ownerDocument.getElementById('root')
);