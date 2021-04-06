import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../Theme';
import { Shelf } from '../Shelf';

describe('Shelf', () => {
  it('render without crash', () => {
    const mockCallback = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Shelf
          title='Chcę przeczytać'
          apiUrl=''
        ></Shelf>
      </ThemeProvider>,
    );
  });
});