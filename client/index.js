import React from 'react';
import { render } from 'react-dom';

render(
    <h1>This is react page</h1>, 
    document.currentScript.ownerDocument.getElementById('root')
);