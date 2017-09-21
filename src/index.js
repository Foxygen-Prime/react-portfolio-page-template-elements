import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Portfolio" component={Portfolio}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

   ,document.getElementById('root'));
registerServiceWorker();
