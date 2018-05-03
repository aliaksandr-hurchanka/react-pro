import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

const App = () => (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </Switch>
        </main>
    </div>
);

export default App;
