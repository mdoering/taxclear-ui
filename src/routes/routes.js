import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../layout/Layout';
import HomePage from './Home/HomePage';
import FuelSavingsPage from './FuelSavings/containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './About/components/AboutPage';
import NotFoundPage from './NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
