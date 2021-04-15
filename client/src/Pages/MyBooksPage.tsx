import { useState, useEffect } from 'react'
import { Header } from '../Components/Header/Header';
import { Navbar } from '../Components/Navbar/Navbar';
import { SearchingBar } from '../Components/SearchingBar/SearchingBar';
import { ShelfImage, ShelfTitle } from '../Components/Shelf/ShelfStyles'
import { Shelf } from '../Components/Shelf/BigShelf';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { BoxComponentProps } from '../Components/Box/Box'
import {
  MyBooksPageWrapper,
  MyBooksWrapper,
  ContentWrapper,
  MyBooksBigLabel,
  MyBooksShelfImage,
  MyBooksBigLabelTittle,
  Footer,
} from './MyBooksPageStyles'

export const MyBooksPage = () => {

  const email = useSelector((state: RootState) => state.user.user?.email);
  const urlComplete = `/api/book-groups/${email}/przeczytane/bookShelves`;
  const urlInProgress = `/api/book-groups/${email}/do%20przeczytania/bookShelves`;
  const urlWantToRead = `/api/book-groups/${email}/chcę%20przeczytać/bookShelves`;

  const handleSubmit = () => { };

  const [forYouBooks, setForYouBooks] = useState<BoxComponentProps[]>([]);

  useEffect(() => {
    loadForYouBooks()
  }, []);

  const loadForYouBooks = async () => {
    const response = await fetch('');
    const data = await response.json();
    setForYouBooks(data);
  }

  return (
    <MyBooksPageWrapper>
      <Header isLogged={true} />
      <Navbar />
      <SearchingBar onSubmit={handleSubmit} />
      <ContentWrapper>
        <MyBooksBigLabel>
          <MyBooksBigLabelTittle>
            Moje książki
          </MyBooksBigLabelTittle>
          <MyBooksShelfImage src={process.env.PUBLIC_URL + '/shelf.png'} />
        </MyBooksBigLabel>
        <MyBooksWrapper>
          <Shelf title='Chcę przeczytać' apiUrl={urlWantToRead} />
          <Shelf title='Właśnie czytam' apiUrl={urlInProgress} />
          <Shelf title='Przeczytane' apiUrl={urlComplete} />


        </MyBooksWrapper>
      </ContentWrapper>
      <Footer>&copy; CodersCamp VI BookWeb</Footer>
    </MyBooksPageWrapper>
  );
};