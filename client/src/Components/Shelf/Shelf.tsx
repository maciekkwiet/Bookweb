import { ShelfComponent, ShelfTitle, ShelfImage } from './ShelfStyles';
import { FC, useState, useEffect } from 'react';
import { Box, BoxComponentProps } from '../Box/Box';
import { Axios } from '../../helpers/axios';

export type ShelfComponentProps = {
  title: string;
  apiUrl: string;
};

export const Shelf: FC<ShelfComponentProps> = ({ title, apiUrl }) => {
  const [books, setBooks] = useState<BoxComponentProps[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const { data } = await Axios.get(apiUrl);
    setBooks(data);
  };

  return (
    <ShelfComponent>
      <ShelfTitle>{title}</ShelfTitle>
      <ShelfImage src={process.env.PUBLIC_URL + '/shelf.png'}></ShelfImage>
      {books.map((book) => (
        <Box
          key={book.book_id}
          title={book.title}
          name={book.name}
          surname={book.surname}
          score={book.score}
          description={book.description}
          cover={book.cover}
        />
      ))}
    </ShelfComponent>
  );
};
