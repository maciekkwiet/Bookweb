import { render, screen } from '@testing-library/react';
import { Image } from '../Image';

describe('Image', () => {
  test('Image must have src, alt, width and height attributes', () => {
    render(
      <Image src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="image" width="100" height="125" />,
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://edit.org/images/cat/book-covers-big-2019101610.jpg');
    expect(image).toHaveAttribute('alt', 'image');
    expect(image).toHaveAttribute('width', '100');
    expect(image).toHaveAttribute('height', '125');
  });
});
