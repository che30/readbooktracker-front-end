import React from 'react';
import Proptypes from 'prop-types';
import '../assets/Navbar.css';

const Navbar = ({ Navcontent }) => (
  <>
    <nav className="bg_color_Pantone w-100 text-white d-flex">
      <div className="Navcontent">{Navcontent}</div>
      <div className="Logout__logo">
        <i className="fa fa-sign-out" />
      </div>
    </nav>
  </>
);
Navbar.propTypes = {
  Navcontent: Proptypes.string.isRequired,
};
export default Navbar;
