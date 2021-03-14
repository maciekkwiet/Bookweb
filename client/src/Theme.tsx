import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: `green`,
    secondary: `red`,
    lightGray: '#505050',
  },
};

export const Theme: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
