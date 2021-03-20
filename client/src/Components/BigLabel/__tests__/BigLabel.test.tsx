import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../Theme';
import { BigLabel } from '../BigLabel';

describe('BigLabel', () => {
  it('render without crash', () => {
    const mockCallback = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <BigLabel>Tytuł książki/Autor/Dodaj książkę</BigLabel>
      </ThemeProvider>,
    );
  });

});

