import { render, screen } from '@testing-library/react';
import { ShadowImage } from '../ShadowImage';

describe('Image', () => {
  test('Image must have src, alt', () => {
    render(<ShadowImage src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="image" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://edit.org/images/cat/book-covers-big-2019101610.jpg');
    expect(image).toHaveAttribute('alt', 'image');
  });
});
