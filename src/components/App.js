import React from 'react';
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Navbar from './Navbar';
import data from '../helpers/data';

const App = () => {
  const token = data();
  const decoded = jwtDecode(token.auth_token);
  if (token === null || decoded.exp < Date.now() / 1000) {
    return (
      <>
        <Redirect to="/Login" />
      </>
    );
  }
  return (

    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
