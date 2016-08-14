import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
/*eslint-disable import/no-named-as-default*/
import HomePage from './components/HomePage';
/*eslint-disable import/no-named-as-default*/
import ComparePage from './containers/ComparePage';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="compare" component={ComparePage} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
