/* eslint-disable  react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const token = JSON.parse(localStorage.getItem('auth_token'));
  let decoded;
  if (token !== null) {
    decoded = jwtDecode(token);
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
