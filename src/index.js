import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import References from './components/References';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      {/* <nav>
        <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/About">About</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/Portfolio">Portfolio</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/Contact">Contact</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/References">References</NavLink>
      </nav> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/References" component={References}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

   ,document.getElementById('root'));
registerServiceWorker();
