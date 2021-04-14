import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { signupUser } from '../slicers/userSlice';
import { BoxBooks } from '../Components/BoxBooks/BoxBooks';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import { TopBooksBox } from '../Components/TopBooks/TopBooksComponent';
import { TopBooksDiv, TopBooksTitle } from '../Components/TopBooks/TopBookComponentStyles';
import { HeaderImage } from '../Components/HeaderImage/HeaderImage';
import { RegistrationForm } from '../Components/RegistrationForm/RegistrationForm';
import { useEffect, useState } from 'react';
import { BookDetails as BookDetailsType } from '../Components/TopBooks/TopBooksComponent';
import { Axios } from '../helpers/axios';
import { TitleDiv } from '../Components/TopBooks/TopBookComponentStyles';
import { RegistrationDiv } from '../Components/RegistrationForm/RegistrationFormStyles';

export const RegisterHomePage = () => {
  const dispatch = useDispatch();
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
      <RegistrationDiv>
        <BoxBooks />
        <RegistrationForm onSubmit={onSubmit} />
      </RegistrationDiv>
      <TopBooksDiv>
        <TitleDiv>
          <TopBooksTitle>Najlepiej oceniane</TopBooksTitle>
        </TitleDiv>
        <TopBooksBox topBooks={topBooks}> </TopBooksBox>
      </TopBooksDiv>
      <Footer></Footer>
    </>
  );
};
