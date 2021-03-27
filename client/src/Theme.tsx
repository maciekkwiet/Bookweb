import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: `rgb(0,0,0)`,
    secondary: `rgb(255,255,255)`,
    readMore: `rgb(61,90,128)`,
    checkkedStars: 'C92523',
    uncheckedStars: '#e4e5e9',
  },
  backgrounds: {
    bright: `rgb(242,243,244)`,
    lightTransparent: `rgba(255,255,255,0.5)`,
    darkTransparent: `rgba(0,0,0,0.15)`,
    mainGradient: `linear-gradient(312.01deg, #CB997E 0.66%, #9EB2CD 100%)`,
    bigCardGradient: `linear-gradient(289.63deg, #B98163 8.13%, rgba(70, 68, 66, 0) 139.61%);`,
  },
  fonts: {
    default: `Montserrat`,
    logo: `Esteban`,
    sentence: `Clicker Script`,
    lightGray: '#505050',
  },
  h2: {
    fontSize: `3vh`,
    lineHeight: `2.5em`,
  },
  shadows: {
    inset: `inset 0px 4px 4px rgba(0, 0, 0, 0.25)`,
  },
  size: {
    xs: `320px`,
    sm: `700px`,
    lg: `1200px`,
  },
  // device: {
  //   xs: `(min-width: ${size.xs})`,
  //   sm: `(min-width: ${size.sm})`,
  //   lg: `(min-width: ${size.lg})`,
  //  }
};

export const Theme: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
