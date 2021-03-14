import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../Theme';
import ReactStars from 'react-stars';

describe('Stars', () => {
  it('render without crash', () => {
    render(
      <ThemeProvider theme={theme}>
        <div>
          <ReactStars />
        </div>
      </ThemeProvider>,
    );
  });
});
