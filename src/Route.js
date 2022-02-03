import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Book from './components/books';
import Login from './containers/Login';
import NewBook from './containers/NewBook';
import NewCategory from './containers/newcategory';
import NewMeasuement from './containers/NewMeasuement';
import Signup from './containers/Signup';
import ProtectedRoute from './components/ProtectedRoute';

const Routes = () => (

  <main>
    <Switch>
      <ProtectedRoute path="/" component={App} exact />
      <Route path="/Signup" component={Signup} />
      <ProtectedRoute path="/Book" component={() => <Book created={false} />} />
      <Route path="/Login" component={Login} />
      <ProtectedRoute path="/new-category" component={NewCategory} />
      <ProtectedRoute path="/new-measurement" component={NewMeasuement} />
      <ProtectedRoute path="/new-book" component={NewBook} />

    </Switch>
  </main>
);
export default Routes;
