import React from 'react';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Navbar from './Navbar';

const App = () => (

  <div>
    <Navbar allbooks="Dashboard" />
    <Dashboard />
    <Footer />
  </div>
);

export default App;
