import React from 'react';
import Dashboard from '../containers/Dashboard';
import Footer from './Footer';
import Navbar from './Navbar';

const App = () => (

  <div>
    <Navbar Navcontent="Dashboard" />
    <Dashboard />
    <Footer />
  </div>
);

export default App;
