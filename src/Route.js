import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Book from './components/books';
import Login from './containers/Login';
import NewBook from './containers/NewBook';
import NewCategory from './containers/newcategory';
import Signup from './containers/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import AllBooks from './containers/AllBooks';
import Measure from './containers/Measure';

const Routes = () => (

  <main>
    <Switch>
      <ProtectedRoute path="/" component={App} exact />
      <Route path="/Signup" component={Signup} />
      <ProtectedRoute path="/Book" component={() => <Book created={false} />} />
      <Route path="/Login" component={Login} />
      <ProtectedRoute path="/new-category" component={NewCategory} />
      <ProtectedRoute path="/books" component={AllBooks} />
      <ProtectedRoute path="/new-book" component={NewBook} />
      <ProtectedRoute path="/measure" component={Measure} />

    </Switch>
  </main>
);
export default Routes;
