import { useSelector } from 'react-redux';
import { BoxBooks } from '../Components/BoxBooks/BoxBooks';
import ChooseGenre from '../Components/ChooseGenre/ChooseGenre';
import { Header } from '../Components/Header/Header';
import { HeaderImage } from '../Components/HeaderImage/HeaderImage';
import { RegistrationForm } from '../Components/RegistrationForm/RegistrationForm';
import { selectUser } from '../Features/User/UserSlice';

export const HomePage = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <Header isLogged={user?.user} />
      <HeaderImage />
      <h1>Search BAR</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '0 5em',
          flexWrap: 'wrap',
          marginBottom: '50px',
        }}
      >
        <BoxBooks />
        <RegistrationForm onSubmit={() => {}} />
      </div>
      <div>
        <h1>Najlepiej oceniane</h1>
        <ChooseGenre />
      </div>
    </>
  );
};
