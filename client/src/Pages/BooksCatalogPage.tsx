import { useState, useEffect } from 'react';
import { Header } from '../Components/Header/Header';
import { Navbar } from '../Components/Navbar/Navbar';
import { SearchingBar } from '../Components/SearchingBar/SearchingBar';
import { MyBooksPageWrapper, ContentWrapper, MyBooksBigLabel, MyBooksShelfImage, Footer } from './MyBooksPageStyles';
import { RankingBigLabelTittle, RankingWrapper } from './RankingPageStyles';
import { BookDetails as BookDetailsType } from '../Components/TopBooks/TopBooksComponent';
import { Axios } from '../helpers/axios';
import { RankingBox } from '../Components/Box/RankingBox';

export const BooksCatalogPage = () => {
  const [topBooks, setTopBooks] = useState<BookDetailsType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await Axios.get('/api/books');

      for (let book of data) {
        const { data: authors } = await Axios.get(`/api/books/${book.id}/authors`);
        book.author = authors.map((author) => `${author.name} ${author.surname}`).join(', ');
      }

      setTopBooks(data);
    };

    fetch();
  }, []);

  const handleSubmit = () => {
    console.log('XDD');
  };

  return (
    <MyBooksPageWrapper>
      <Header isLogged={true} />
      <Navbar />
      <SearchingBar onSubmit={handleSubmit} />
      <ContentWrapper>
        <MyBooksBigLabel>
          <RankingBigLabelTittle>Katalog książek</RankingBigLabelTittle>
          <MyBooksShelfImage src={process.env.PUBLIC_URL + '/shelf.png'} />
        </MyBooksBigLabel>
        <RankingWrapper>
          {topBooks.map((book) => (
            <RankingBox
              id={book.id}
              title={book.title}
              author={book.author}
              review=""
              rating={String(parseFloat(parseFloat(book.rating).toFixed(2)))}
              cover={book.cover}
            />
          ))}
        </RankingWrapper>
      </ContentWrapper>
      <Footer>&copy; CodersCamp VI BookWeb</Footer>
    </MyBooksPageWrapper>
  );
};
