import { ThemeProvider } from 'styled-components';
import { theme } from '../src/Theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const withTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withTheme];
