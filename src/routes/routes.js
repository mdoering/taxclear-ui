import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../layout/Layout';
import HomePage from './home/components/HomePage';
import AboutPage from './about/components/AboutPage';
import NamePage from './name/containers/NamePage';

import NotFoundPage from './NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="name/:id" component={NamePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
