import { screen, render } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  const renderCheckbox = (genre) => {
    render(<Checkbox genre={genre} />);
  };

  it('Renders without crash', () => {
    renderCheckbox('movie genre');
  });

  it('Checkbox should have a span with genre text', () => {
    renderCheckbox('movie genre');
    const genre = screen.getByText('movie genre');
    expect(genre).toBeTruthy();
  });
});
