import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Theme';

import StarRating from '../StarRating';

describe('Stars', () => {
  it('render without crash', () => {
    const myMock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <StarRating getNumberOfStars={myMock} />
      </ThemeProvider>,
    );
  });
});
