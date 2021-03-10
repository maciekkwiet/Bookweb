import { cleanup, fireEvent, render } from '@testing-library/react';
import Input from '../Input';

afterEach(cleanup);

describe('InputComponent', () => {
  it('renders without crash', () => {
    render(<Input type="text" placeholder="Haslo" />);
  });

  it('calling onChange function when text input value is changed', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<Input type="text" placeholder="Haslo" onChange={mockCallback} />);

    const input = getByTestId('InputId');

    if (input) fireEvent.change(input, { target: { value: 'text' } });
    expect(mockCallback).toHaveBeenCalled();
  });

  it('calling onChange function when checkbox is checked', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<Input type="checkbox" placeholder="Haslo" onChange={mockCallback} />);

    const input = getByTestId('InputId');

    if (input) fireEvent.click(input);
    expect(mockCallback).toHaveBeenCalled();
  });
});
