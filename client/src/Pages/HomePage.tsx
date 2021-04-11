import { useSelector } from 'react-redux';

import { BoxBooks } from '../Components/BoxBooks/BoxBooks';
// import ChooseGenre from '../Components/ChooseGenre/ChooseGenre';
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
// import { selectUser } from '../Features/User/UserSlice';

export const HomePage = () => {
  // const user = useSelector(selectUser);
  const [topBooks, setTopBooks] = useState<BookDetailsType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await Axios.get('/api/books/top');

      setTopBooks(data);
    };

    fetch();
  });

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
        <RegistrationForm onSubmit={() => {}} />
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
