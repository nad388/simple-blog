import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <NavLink className='navbar__item' to='/about'>
          About website
        </NavLink>
        <NavLink className='navbar__item' to='/posts'>
          Posts
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
