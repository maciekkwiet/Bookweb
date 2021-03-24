import React from 'react';
import { NavbarComponent, NavLink, Bars, NavMenu } from './NavbarStyles';

export const Navbar = () => {
  return (
    <NavbarComponent>
      <Bars />
      <NavMenu>
        <NavLink to="/bookscatalog">Katalog ksiazek</NavLink>
        <NavLink to="/addbook">Dodaj ksiazke</NavLink>
        <NavLink to="/mybooks">Moje ksiazki</NavLink>
        <NavLink to="/top100">Top 100</NavLink>
        <NavLink to="/bookprovidercatalog">Katalog ksiegarn i bibliotek</NavLink>
      </NavMenu>
    </NavbarComponent>
  );
};

export default Navbar;
