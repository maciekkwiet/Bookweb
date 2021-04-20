import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../Components/Header/Header';
import { Navbar } from '../Components/Navbar/Navbar';
import { SearchingBar } from '../Components/SearchingBar/SearchingBar';
import { MyBooksPageWrapper, ContentWrapper, MyBooksBigLabel, MyBooksShelfImage, Footer } from './MyBooksPageStyles';
import { RankingBigLabelTittle, RankingWrapper } from './RankingPageStyles';
import { BookDetails as BookDetailsType } from '../Components/TopBooks/TopBooksComponent';
import { Axios } from '../helpers/axios';
import { RankingBox } from '../Components/Box/RankingBox';
import { RootState } from '../app/store';
import { setInputValue } from '../slicers/inputSlice';

export const BooksCatalogPage = () => {
  const [topBooks, setTopBooks] = useState<BookDetailsType[]>([]);
  const inputValue = useSelector((state: RootState) => state.searchInput.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInputValue(''));
  }, []);

  useEffect(() => {
    const fetch = async () => {
      let result;
      if (inputValue) {
        result = await Axios.get('/api/books/name', {
          params: {
            name: inputValue,
          },
        });
      } else {
        result = await Axios.get('/api/books');
      }

      for (let book of result?.data) {
        const { data: authors } = await Axios.get(`/api/books/${book.id}/authors`);
        const { data: rating } = await Axios.get(`/api/books/average/${book.id}`);
        book.author = authors.map((author) => `${author.name} ${author.surname}`).join(', ');
        book.rating = rating[0]?.rating;
      }
      setTopBooks(result?.data);
    };

    fetch();
  }, [inputValue]);

  const handleSubmit = () => {};

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
              rating={Math.round(book.rating)}
              cover={book.cover}
            />
          ))}
        </RankingWrapper>
      </ContentWrapper>
      <Footer>&copy; CodersCamp VI BookWeb</Footer>
    </MyBooksPageWrapper>
  );
};
