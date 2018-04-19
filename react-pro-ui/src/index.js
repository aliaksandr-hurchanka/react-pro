import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';

import App from './app';

render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));
