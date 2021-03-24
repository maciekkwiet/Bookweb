import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { theme } from '../../Theme';

export const NavbarComponent = styled.nav`
  background: ${theme.backgrounds.mainGradient};
  display: flex;
  height: 70px;
`;

export const NavLink = styled(Link)`
  display: flex;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.default};
  font-size: 18px;
  line-heightL 22px;
  text-decoration: none;
  margin: auto 30px;
  cursor: pointer;

  &.active {
    color: ${theme.colors.readMore}
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${theme.colors.secondary};

  @media screen and (max-width: 768px) {
    display: block;
    position absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: start;
  margin-left: 65px;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
