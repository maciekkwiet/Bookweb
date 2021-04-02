import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../Theme';
import { BoxBooks } from '../BoxBooks';

describe('BoxBooks', () => {
  it('render without crash', () => {
    const mockCallback = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <BoxBooks></BoxBooks>
      </ThemeProvider>,
    );
  });

});