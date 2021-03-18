import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Theme';
import TextCard from '../TextCard';

describe('TextCard', () => {
  it('render without crash', () => {
    render(
      <ThemeProvider theme={theme}>
        <TextCard>AuthorName AuthorLastName Description</TextCard>
      </ThemeProvider>,
    );
  });
});
