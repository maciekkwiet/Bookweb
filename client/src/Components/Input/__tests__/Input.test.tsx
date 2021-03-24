import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Theme } from '../../../Theme';
import Input from '../Input';

afterEach(cleanup);

describe('InputComponent', () => {
  it('renders without crash', () => {
    render(
      <Theme>
        <Input type="text" placeholder="Haslo" />;
      </Theme>,
    );
  });

  it('calling onChange function when text input value is changed', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <Theme>
        <Input type="text" placeholder="Haslo" onChange={mockCallback} />
      </Theme>,
    );

    const input = getByTestId('InputId');

    if (input) userEvent.type(input, 'text');
    expect(mockCallback).toHaveBeenCalled();
  });

  it('calling onChange function when checkbox is checked', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <Theme>
        <Input type="checkbox" placeholder="Haslo" onChange={mockCallback} />
      </Theme>,
    );

    const input = getByTestId('InputId');

    if (input) userEvent.click(input);
    expect(mockCallback).toHaveBeenCalled();
  });
});
