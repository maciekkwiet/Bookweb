
import { ShelfComponent, ShelfTitle, ShelfImage } from './ShelfStyles';
import { FC, useState, useEffect } from 'react';
import { Box, BoxComponentProps } from '../Box/Box';


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
      <Box
        title='Securing DevOps'
        author='Julien Vehent'
        rate={5}
        description='An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps teams highest priority is understanding those risks  ...'
        cover='https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg' />
      <Box
        title='Securing DevOps'
        author='Julien Vehent'
        rate={5}
        description='An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps teams highest priority is understanding those risks  ...'
        cover='https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg' />
      {books.map(book => (
        <Box
          key={book.title}
          title={book.title}
          author={book.author}
          rate={book.rate}
          description={book.description}
          cover={book.cover}
        />

      ))}
    </ShelfComponent>
  );
};