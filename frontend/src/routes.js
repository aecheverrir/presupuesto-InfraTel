// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Todos from './containers/Materiales';
import Todo from './containers/Material';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Todos} />
    <Route path="/:id" component={Todo} />
  </Route>
);