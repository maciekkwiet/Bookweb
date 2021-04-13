
import { ShelfComponent, ShelfTitle, ShelfImage } from './ShelfStyles';
import { FC, useState, useEffect } from 'react';
import { Box, BoxComponentProps } from '../Box/Box';
import { Axios } from '../../helpers/axios';
import { BookDetails as BookDetailsType } from '../../Components/TopBooks/TopBooksComponent';


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
    console.log(data);

    setBooks(data);
  }

  // useEffect(() => {
  //   const fetch = async () => {
  //     const { data } = await Axios.get(apiUrl);

  //     for (let book of data) {
  //       const { data: authors } = await Axios.get(`/api/books/${book.id}/authors`);
  //       const { data: reviews } = await Axios.get(`/api/books/${book.id}/reviews`);

  //       book.author = authors.map((author) => `${author.name} ${author.surname}`).join(', ');
  //       book.review = reviews[0].content.substring(0, 50);
  //     }

  //     setBooks(data);

  //   };

  //   fetch();
  // }, []);


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
          description={book.description}
          cover={book.cover}
        />

      ))}
    </ShelfComponent>
  );
};