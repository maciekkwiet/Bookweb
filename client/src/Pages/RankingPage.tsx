import { useState, useEffect } from 'react';
import { Header } from '../Components/Header/Header';
import { Navbar } from '../Components/Navbar/Navbar';
import { MyBooksPageWrapper, ContentWrapper, MyBooksBigLabel, MyBooksShelfImage, Footer } from './MyBooksPageStyles';
import { RankingBigLabelTittle, RankingWrapper } from './RankingPageStyles';
import { BookDetails as BookDetailsType } from '../Components/TopBooks/TopBooksComponent';
import { Axios } from '../helpers/axios';
import { RankingBox } from '../Components/Box/RankingBox';

export const RankingPage = () => {
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

  const handleSubmit = () => {};

  return (
    <MyBooksPageWrapper>
      <Header isLogged={true} />
      <Navbar />
      <ContentWrapper>
        <MyBooksBigLabel>
          <RankingBigLabelTittle>Ranking najlepszych książek</RankingBigLabelTittle>
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
