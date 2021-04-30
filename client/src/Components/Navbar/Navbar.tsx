import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { theme } from '../../Theme';
import { NavbarComponent, NavContainer, NavMenu, Burger, NavItem, NavLinks } from './NavbarStyles';
import { AddBookModal } from '../AddBookModal/AddBookModal';

export type NavbarComponentProps = {};

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setClick(!click);
  const handleOpenModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <IconContext.Provider value={{ color: theme.colors.secondary }}>
      <AddBookModal showModal={showModal} setShowModal={setShowModal} />
      <NavbarComponent>
        <NavContainer>
          <Burger onClick={handleClick} data-testid="BurgerId">
            {click ? <FaTimes data-testid="CloseIconId" /> : <FaBars data-testid="BurgerIconId" />}
          </Burger>
          <NavMenu onClick={handleClick} click={click} data-testid="NavMenuId">
            <NavItem>
              <NavLinks to="/bookscatalog">Katalog książek</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#" onClick={handleOpenModal}>
                Dodaj książkę
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/mybooks">Moje książki</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/ranking" data-testid="RankingLinkId">
                Top 100
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/providerscatalog">Katalog księgarń i bibliotek</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </NavbarComponent>
    </IconContext.Provider>
  );
};

export default Navbar;
