import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const App = () => (
  <div>
      <header>
          <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
              </ul>
          </nav>
      </header>
      <main>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
          </Switch>
      </main>
  </div>
);

const Home = () => (<div>Home</div>);
const About = () => (<div>About</div>);

export default App;
