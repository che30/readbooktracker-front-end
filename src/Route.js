import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Book from './components/books';
import Login from './containers/Login';
import Signup from './containers/Signup';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/Signup" component={Signup} />
      <Route path="/Book" component={Book} />
      <Route path="/Login" component={Login} />
    </Switch>
  </main>
);
export default Routes;
