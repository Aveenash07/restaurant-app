import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Restaurant App</NavLink>
        <NavIcon onClick={toggle}>
          <br></br>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;