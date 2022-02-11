import React from 'react';
import Proptypes from 'prop-types';

const Navbar = ({ allbooks }) => (
  <>
    <nav className="bg_color_Pantone w-100 text-white text-center p-2">
      {allbooks}
    </nav>
  </>
);
Navbar.propTypes = {
  allbooks: Proptypes.string.isRequired,
};
export default Navbar;
