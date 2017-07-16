import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './index.css';
import Layout from './Layout';
import Home from './view/Home';
import About from './view/About';
import Media from './view/Media';
import Projects from './view/Projects';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="home" component={Home}></Route>
      <Route path="about" component={About}></Route>
      <Route path="media" component={Media}></Route>
      <Route path="projects" component={Projects}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
