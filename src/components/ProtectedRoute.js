/* eslint-disable  react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import data from '../helpers/data';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const test = { ...restOfProps };
  console.log(test);
  const token = data();
  let decoded;
  if (token !== null) {
    decoded = jwtDecode(token.auth_token);
  }
  if (token === null || decoded.exp < Date.now() / 1000) {
    return (
      <Route
        {...restOfProps}
        render={() => <Redirect to="/Login" />}
      />
    );
  }
  return (
    <Route
      {...restOfProps}
      render={(props) => <Component {...props} />}
    />
  );
};
ProtectedRoute.defaultProps = {
  component() {},
};
ProtectedRoute.propTypes = {
  component: PropTypes.func,
};
export default ProtectedRoute;
