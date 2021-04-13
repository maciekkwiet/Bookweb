import { Story } from '@storybook/react';
import { BookProps, BookDescription } from './BookDescription';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Book Description',
  component: BookDescription,
  decorators: [(Story: any) => <Story />],
};

const BookDescriptionProps: BookProps = {
  image: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
  author: 'Krzysztof Stanowski',
  releaseDate: '12.02.1020',
  numberOfPages: 250,
  isbn: 46546546321,
  averageRating: 7.5,
};

export const BookDescriptionComponent: Story<BookProps> = () => <BookDescription {...BookDescriptionProps} />;
