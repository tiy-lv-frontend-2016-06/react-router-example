import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Layout from './layout';
import Home from './home';
import About from './about';
import FAQ from './faq';
import Contact from './contact';
import User from './user';

var Site = (
  <Router history={hashHistory}>
    <Route component={Layout}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="faq" component={FAQ} />
      <Route path="foo">
        <Route path="contact" component={Contact} />
      </Route>
      <Route path="/users/:userId" component={User} />
    </Route>
  </Router>
)

render(Site, document.getElementById('app'));