import { FC } from 'react';

import { Box } from '../Box/Box';
import { TopBooksComponent } from './TopBookComponentStyles';

type BookDetails = {
  title: string;
  author: string;
  rate: number;
  review: string;
  image: string;
};

export type TopBooksProps = {
  topBooks: BookDetails[];
};

export const TopBooksBox: FC<TopBooksProps> = ({ topBooks }) => {
  const booksList = topBooks.map((e) => (
    <Box title={e.title} author={e.author} rate={e.rate} review={e.review} image={e.image}></Box>
  ));
  return <TopBooksComponent>{booksList}</TopBooksComponent>;
};
