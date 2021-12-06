import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Book from './components/books';
import Login from './containers/Login';
import NewBook from './containers/NewBook';
import NewCategory from './containers/newcategory';
import Signup from './containers/Signup';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/Signup" component={Signup} />
      <Route path="/Book" component={() => <Book created={false} />} />
      <Route path="/Login" component={Login} />
      <Route path="/new-category" component={NewCategory} />
      <Route path="/new-book" component={NewBook} />
    </Switch>
  </main>
);
export default Routes;
