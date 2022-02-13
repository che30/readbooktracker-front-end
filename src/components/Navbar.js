import React from 'react';
import Proptypes from 'prop-types';

const Navbar = ({ Navcontent }) => (
  <>
    <nav className="bg_color_Pantone w-100 text-white text-center p-2">
      {Navcontent}
    </nav>
  </>
);
Navbar.propTypes = {
  Navcontent: Proptypes.string.isRequired,
};
export default Navbar;
