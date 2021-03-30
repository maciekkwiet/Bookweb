import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { theme } from '../../Theme';
import { NavbarComponent, NavContainer, NavMenu, Burger, NavItem, NavLinks } from './NavbarStyles';

export type NavbarComponentProps = {};

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <IconContext.Provider value={{ color: theme.colors.secondary }}>
      <NavbarComponent>
        <NavContainer>
          <Burger onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</Burger>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/catalog">Katalog książek</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/add">Dodaj książkę</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/mybooks">Moje książki</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/top">Top 100</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/catalog">Katalog księgarń i bibliotek</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </NavbarComponent>
    </IconContext.Provider>
  );
};

export default Navbar;
