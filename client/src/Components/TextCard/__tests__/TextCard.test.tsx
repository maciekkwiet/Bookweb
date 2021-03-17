import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Theme';
import { TextCard } from '../TextCard';

describe('TextCard', () => {
  it('render without crash', () => {
    const mockCallback = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <TextCard>Tytuł książki/Autor/Dodaj książkę</TextCard>
      </ThemeProvider>,
    );
  });
});
