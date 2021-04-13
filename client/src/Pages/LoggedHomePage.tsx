import { useState, useEffect } from 'react'
import { Header } from '../Components/Header/Header';
import { Navbar } from '../Components/Navbar/Navbar';
import { SearchingBar } from '../Components/SearchingBar/SearchingBar';
import { Shelf } from '../Components/Shelf/Shelf';
import { ShelfImage } from '../Components/Shelf/ShelfStyles'
import { ForYouBox } from '../Components/Box/ForYouBox'
import { BoxComponentProps } from '../Components/Box/Box'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

import {
  LoggedHomePageWrapper,
  MyBooksWrapper,
  ContentWrapper,
  MyBooksBigLabel,
  AsideBigLabel,
  AsideWrapper,
  ForYouContainer,
  Footer,
} from './LoggedHomePageStyles'

export const LoggedHomePage = () => {

  const email = useSelector((state: RootState) => state.user.user?.email);
  const urlComplete = `http://localhost:8080/api/book-groups/${email}/przeczytane/bookShelves`;
  const urlInProgress = `http://localhost:8080/api/book-groups/${email}/czytam/bookShelves`;
  const urlWantToRead = `http://localhost:8080/api/book-groups/${email}/chcę%20przeczytać/bookShelves`

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
    <LoggedHomePageWrapper>
      <Header isLogged={true} />
      <Navbar />
      <SearchingBar onSubmit={handleSubmit} />
      <ContentWrapper>
        <MyBooksWrapper>
          <MyBooksBigLabel title='Moje książki' />
          <Shelf title='Chcę przeczytać' apiUrl={urlWantToRead} />
          <Shelf title='Właśnie czytam' apiUrl={urlInProgress} />
          <Shelf title='Przeczytane' apiUrl={urlComplete} />
        </MyBooksWrapper>
        <AsideWrapper>
          <ShelfImage src={process.env.PUBLIC_URL + '/shelf.png'} />
          <AsideBigLabel title='Polecane dla Ciebie' />
          <ForYouContainer >

            {/* {forYouBooks.map(book => (
              <ForYouBox
                key={book.title}
                title={book.title}
                author={book.author}
                rate={book.score}
                review={book.description}
                image={book.cover}
              />

            ))} */}
          </ForYouContainer>
          <AsideBigLabel title='Aktywność znajomych' />
        </AsideWrapper>
      </ContentWrapper>
      <Footer>&copy; CodersCamp VI BookWeb</Footer>
    </LoggedHomePageWrapper>
  );
};