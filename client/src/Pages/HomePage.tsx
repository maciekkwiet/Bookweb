import { useSelector } from 'react-redux';

import { BoxBooks } from '../Components/BoxBooks/BoxBooks';
import ChooseGenre from '../Components/ChooseGenre/ChooseGenre';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import { TopBooksBox } from '../Components/TopBooks/TopBooksComponent';
import { TopBooksDiv, TopBooksTitle } from '../Components/TopBooks/TopBookComponentStyles';
import { HeaderImage } from '../Components/HeaderImage/HeaderImage';
import { RegistrationForm } from '../Components/RegistrationForm/RegistrationForm';
import { selectUser } from '../Features/User/UserSlice';

export const HomePage = () => {
  const user = useSelector(selectUser);

  const sampleBooks = [
    {
      title: 'Securing DevOps',
      author: 'Julien Vehent',
      rate: 5,
      review: 'An application running in the cloud can benefit from incredible efficiencies ',
      image: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
    },
    {
      title: 'Securing DevOps',
      author: 'Julien Vehent',
      rate: 5,
      review: 'An application running in the cloud can benefit from incredible efficiencies ',
      image: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
    },
    {
      title: 'Securing DevOps',
      author: 'Julien Vehent',
      rate: 5,
      review: 'An application running in the cloud can benefit from incredible efficiencies ',
      image: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
    },
  ];

  return (
    <>
      <Header isLogged={user?.user} />
      <HeaderImage />
      {/* <h1>Search BAR</h1> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '5em 0em',
          flexWrap: 'wrap',
          marginBottom: '50px',
          background: 'linear-gradient(312.01deg, #CB997E 0.66%, #9EB2CD 100%)',
          width: '100%',
        }}
      >
        <BoxBooks />
        <RegistrationForm onSubmit={() => {}} />
      </div>
      <TopBooksDiv>
        <TopBooksTitle>Najlepiej oceniane</TopBooksTitle>
        <ChooseGenre />
        <TopBooksBox topBooks={sampleBooks}> </TopBooksBox>
        <ChooseGenre />
        <TopBooksBox topBooks={sampleBooks}> </TopBooksBox>
      </TopBooksDiv>
      <Footer></Footer>
    </>
  );
};
