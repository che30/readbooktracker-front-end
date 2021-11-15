import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Book from './components/books';
import Login from './containers/Login';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/Book" component={Book} />
      <Route path="/Login" component={Login} />
    </Switch>
  </main>
);
export default Routes;
