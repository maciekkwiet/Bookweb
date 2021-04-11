import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../Theme';
import { HeaderImage } from '../HeaderImage';

describe('Header', () => {
  it('render without crash', () => {
    render(
      <ThemeProvider theme={theme}>
        <HeaderImage />
      </ThemeProvider>,
    );
  });
});
