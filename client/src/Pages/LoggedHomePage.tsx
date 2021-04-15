import { useState, useEffect } from 'react';
import { Header } from '../Components/Header/Header';
import { Navbar } from '../Components/Navbar/Navbar';
import { Shelf } from '../Components/Shelf/Shelf';
import { ShelfImage } from '../Components/Shelf/ShelfStyles';
import { ForYouBox } from '../Components/Box/ForYouBox';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Axios } from '../helpers/axios';
import { BookDetails as BookDetailsType } from '../Components/TopBooks/TopBooksComponent';
import {
  LoggedHomePageWrapper,
  MyBooksWrapper,
  ContentWrapper,
  MyBooksBigLabel,
  AsideBigLabel,
  AsideWrapper,
  ForYouContainer,
  Footer,
} from './LoggedHomePageStyles';

export const LoggedHomePage = () => {
  const email = useSelector((state: RootState) => state.user.user?.email);
  const urlComplete = `/api/book-groups/${email}/przeczytane/bookShelves`;
  const urlInProgress = `/api/book-groups/${email}/czytam/bookShelves`;
  const urlWantToRead = `/api/book-groups/${email}/chcę%20przeczytać/bookShelves`;

  const handleSubmit = () => {};

  const [topBooks, setTopBooks] = useState<BookDetailsType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await Axios.get('/api/books/top');

      for (let book of data) {
        const { data: authors } = await Axios.get(`/api/books/${book.id}/authors`);
        const { data: reviews } = await Axios.get(`/api/books/${book.id}/reviews`);

        book.author = authors.map((author) => `${author.name} ${author.surname}`).join(', ');
        book.review = reviews[0].content.substring(0, 50);
      }

      setTopBooks(data);
    };

    fetch();
  }, []);

  return (
    <LoggedHomePageWrapper>
      <Header isLogged={true} />
      <Navbar />
      <ContentWrapper>
        <MyBooksWrapper>
          <MyBooksBigLabel title="Moje książki" />
          <Shelf title="Chcę przeczytać" apiUrl={urlWantToRead} />
          <Shelf title="Właśnie czytam" apiUrl={urlInProgress} />
          <Shelf title="Przeczytane" apiUrl={urlComplete} />
        </MyBooksWrapper>
        <AsideWrapper>
          <ShelfImage src={process.env.PUBLIC_URL + '/shelf.png'} />
          <AsideBigLabel title="Polecane dla Ciebie" />
          <ForYouContainer>
            {topBooks.map((book) => (
              <ForYouBox
                id={book.id}
                title={book.title}
                author={book.author}
                review=""
                rating={String(parseFloat(parseFloat(book.rating).toFixed(2)))}
                cover={book.cover}
              />
            ))}
          </ForYouContainer>
          <AsideBigLabel title="Aktywność znajomych" />
        </AsideWrapper>
      </ContentWrapper>
      <Footer>&copy; CodersCamp VI BookWeb</Footer>
    </LoggedHomePageWrapper>
  );
};
