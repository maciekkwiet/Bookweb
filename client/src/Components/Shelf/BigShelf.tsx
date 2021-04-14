import { ShelfComponent, ShelfTitle, ShelfImage } from './BigShelfStyles';
import { FC, useState, useEffect } from 'react';
import { Box, BoxComponentProps } from '../Box/BigBox';


export type ShelfComponentProps = {
  title: string;
  apiUrl: string;
};


export const Shelf: FC<ShelfComponentProps> = ({ title, apiUrl }) => {

  const [books, setBooks] = useState<BoxComponentProps[]>([]);

  useEffect(() => {
    loadBooks()
  }, []);

  const loadBooks = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setBooks(data);
  }


  return (
    <ShelfComponent>
      <ShelfTitle>{title}</ShelfTitle>
      <ShelfImage src={process.env.PUBLIC_URL + '/shelf.png'}></ShelfImage>
      {books.map(book => (
        <Box
          key={book.book_id}
          title={book.title}
          name={book.name}
          surname={book.surname}
          score={book.score}
          cover={book.cover}
        />

      ))}
    </ShelfComponent>
  );
};