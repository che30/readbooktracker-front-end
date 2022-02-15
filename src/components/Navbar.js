import React from 'react';
import Proptypes from 'prop-types';
import '../assets/Navbar.css';

const Navbar = ({ Navcontent }) => {
  const handleClick = () => {
    localStorage.setItem('auth_token', null);
    window.location.href = '/Login';
  };
  return (
    <>
      <nav className="bg_color_Pantone w-100 text-white d-flex font-helvetica-bold">
        <div className="Navcontent">{Navcontent}</div>
        <div className="Logout__logo">
          <button
            className="sign__out__Btn"
            onClick={handleClick}
            type="button"
            aria-label="Logout"
          >
            <i className="fa fa-power-off" />
          </button>
        </div>
      </nav>
    </>
  );
};
Navbar.propTypes = {
  Navcontent: Proptypes.string.isRequired,
};
export default Navbar;
