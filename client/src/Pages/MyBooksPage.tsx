import { useState, useEffect } from 'react';
import { Header } from '../Components/Header/Header';
import { Navbar } from '../Components/Navbar/Navbar';
import { ShelfImage, ShelfTitle } from '../Components/Shelf/ShelfStyles';
import { Shelf } from '../Components/Shelf/BigShelf';

import { BoxComponentProps } from '../Components/Box/Box';
import {
  MyBooksPageWrapper,
  MyBooksWrapper,
  ContentWrapper,
  MyBooksBigLabel,
  MyBooksShelfImage,
  MyBooksBigLabelTittle,
  Footer,
} from './MyBooksPageStyles';

export const MyBooksPage = () => {
  const handleSubmit = () => {};

  const [forYouBooks, setForYouBooks] = useState<BoxComponentProps[]>([]);

  useEffect(() => {
    loadForYouBooks();
  }, []);

  const loadForYouBooks = async () => {
    const response = await fetch('');
    const data = await response.json();
    setForYouBooks(data);
  };

  return (
    <MyBooksPageWrapper>
      <Header isLogged={true} />
      <Navbar />
      <ContentWrapper>
        <MyBooksBigLabel>
          <MyBooksBigLabelTittle>Moje książki</MyBooksBigLabelTittle>
          <MyBooksShelfImage src={process.env.PUBLIC_URL + '/shelf.png'} />
        </MyBooksBigLabel>
        <MyBooksWrapper>
          <Shelf title="Chcę przeczytać" apiUrl="" />
          <Shelf title="Właśnie czytam" apiUrl="" />
          <Shelf title="Przeczytane" apiUrl="" />
        </MyBooksWrapper>
      </ContentWrapper>
      <Footer>&copy; CodersCamp VI BookWeb</Footer>
    </MyBooksPageWrapper>
  );
};
