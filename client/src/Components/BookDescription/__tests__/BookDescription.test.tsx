import { render, screen } from '@testing-library/react';
import { Theme } from '../../../Theme';
import { BookDescription } from '../BookDescription';

const test = {
  image: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
  author: 'Krzysztof Stanowski',
  releaseDate: '01.01.2020',
  numberOfPages: '100',
  isbn: '123456789',
  averageRating: '5.0',
};

const renderBookDescription = () => {
  render(
    <Theme>
      <BookDescription
        image={test.image}
        author={test.author}
        releaseDate={test.releaseDate}
        numberOfPages={test.numberOfPages}
        isbn={test.isbn}
        averageRating={test.averageRating}
      />
    </Theme>,
  );
};

describe('BookDescription component', () => {
  it('Should render image with passed source', () => {
    renderBookDescription();

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
    );
  });
});
