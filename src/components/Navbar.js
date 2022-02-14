import React from 'react';
import Proptypes from 'prop-types';
import '../assets/Navbar.css';
import { Link } from 'react-router-dom';
import ResetStore from '../helpers/ResetLocalStorage';

const Navbar = ({ Navcontent }) => (
  <>
    <nav className="bg_color_Pantone w-100 text-white d-flex">
      <div className="Navcontent">{Navcontent}</div>
      <div className="Logout__logo ">
        <Link
          onClick={() => { ResetStore(); }}
          to="/Login"
          className="text-decoration-none text-white"
        >
          <i className="fa fa-sign-out" />
        </Link>

      </div>
    </nav>
  </>
);
Navbar.propTypes = {
  Navcontent: Proptypes.string.isRequired,
};
export default Navbar;
