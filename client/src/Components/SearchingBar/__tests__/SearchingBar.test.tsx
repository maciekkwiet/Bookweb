import { ThemeProvider } from 'styled-components';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';
import { theme } from '../../../Theme';
import { SearchingBar } from '../SearchingBar';

describe('RegistrationForm', () => {
  it('render without crash', async () => {
    const handleSubmit = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <SearchingBar onSubmit={handleSubmit} />
      </ThemeProvider>,
    );

    const phrase = screen.getByPlaceholderText('wpisz wyszukiwaną frazę');

    userEvent.type(phrase, 'test1');

    const button = screen.getByTestId('buttonId');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        phrase: 'test1',
      }),
    );
  });
});
