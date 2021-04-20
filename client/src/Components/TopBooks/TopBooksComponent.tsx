import { FC } from 'react';

import { Box } from '../Box/Box';
import { TopBooksComponent } from './TopBookComponentStyles';

export type BookDetails = {
  id: number;
  title: string;
  author: string;
  rating: number;
  review: string;
  cover: string;
};

export type TopBooksProps = {
  topBooks: BookDetails[];
};

export const TopBooksBox: FC<TopBooksProps> = ({ topBooks }) => {
  const booksList = topBooks.map((e) => (
    <Box
      book_id={e.id}
      title={e.title}
      author={e.author}
      description={e.review}
      score={Math.round(e.rating)}
      cover={e.cover}
      key={e.id}
    ></Box>
  ));

  return <TopBooksComponent>{booksList}</TopBooksComponent>;
};
