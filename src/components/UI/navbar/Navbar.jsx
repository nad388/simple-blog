import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div className='navbar'>
      <MyButton onClick={logout}>Logout</MyButton>
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
