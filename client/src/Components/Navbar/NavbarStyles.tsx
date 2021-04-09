import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../Theme';

export const NavbarComponent = styled.nav`
  background: ${theme.backgrounds.mainGradient};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1300px;
`;

export const Burger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul<{ click: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${theme.backgrounds.mainGradient};
  }
`;

export const NavItem = styled.li`
  height: 3em;
  border-bottom: 2px solid transparent;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavLinks = styled(Link)`
  color: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &:hover {
    color: ${theme.colors.readMore};
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
    text-align: center;
    width: 100%;
    display: table;

    &:hover {
      color: ${theme.colors.readMore};
      transition: all 0.3s ease;
    }
  }
`;
