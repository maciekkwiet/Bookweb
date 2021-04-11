import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../slicers/userSlice';

import { BoxBooks } from '../Components/BoxBooks/BoxBooks';
// import ChooseGenre from '../Components/ChooseGenre/ChooseGenre';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import { TopBooksBox } from '../Components/TopBooks/TopBooksComponent';
import { TopBooksDiv, TopBooksTitle } from '../Components/TopBooks/TopBookComponentStyles';
import { HeaderImage } from '../Components/HeaderImage/HeaderImage';
import { RegistrationForm } from '../Components/RegistrationForm/RegistrationForm';
import { useEffect, useState, useCallback } from 'react';
import { BookDetails as BookDetailsType } from '../Components/TopBooks/TopBooksComponent';
import { Axios } from '../helpers/axios';
import { TitleDiv } from '../Components/TopBooks/TopBookComponentStyles';

export const HomePage = () => {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
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

  const onSubmit = (values) => {
    dispatch(signupUser(values));
  };

  return (
    <>
      <Header isLogged={false} />
      <HeaderImage />
      {/* <h1>Search BAR</h1> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '5em 0em',
          flexWrap: 'wrap',
          // marginBottom: '50px',
          background: 'linear-gradient(312.01deg, #CB997E 0.66%, #9EB2CD 100%)',
          width: '100%',
        }}
      >
        <BoxBooks />
        <RegistrationForm onSubmit={onSubmit} />
      </div>
      <TopBooksDiv>
        <TitleDiv>
          <TopBooksTitle>Najlepiej oceniane</TopBooksTitle>
        </TitleDiv>
        {/* <ChooseGenre /> */}
        <TopBooksBox topBooks={topBooks}> </TopBooksBox>
        {/* <ChooseGenre /> */}
        {/* <TopBooksBox topBooks={sampleBooks}> </TopBooksBox> */}
      </TopBooksDiv>
      <Footer></Footer>
    </>
  );
};
