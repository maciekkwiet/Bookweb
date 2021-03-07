import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../Theme';
import { Button } from '../Button';

describe('ButtonWithIcon', () => {
  it('render without crash', () => {
    const mockCallback = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button onClick={mockCallback}>Button</Button>
      </ThemeProvider>,
    );
  });

  it('not called function when disabled is true', () => {
    const mockCallback = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button onClick={mockCallback} disabled={true}>
          Button
        </Button>
      </ThemeProvider>,
    );

    const button = screen.queryByTestId('ButtonId');
    if (button) userEvent.click(button);
    expect(button).toHaveAttribute('disabled');
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('called function atfer click', () => {
    const mockCallback = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={mockCallback}>Button</Button>
      </ThemeProvider>,
    );

    const button = screen.queryByTestId('ButtonId');
    if (button) userEvent.click(button);
    expect(mockCallback).toHaveBeenCalled();
  });
});
