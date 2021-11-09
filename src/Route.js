import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Book from './components/books';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/Book" component={Book} />
    </Switch>
  </main>
);
export default Routes;
