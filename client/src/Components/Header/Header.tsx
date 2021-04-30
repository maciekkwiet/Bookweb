import { HeaderComponent, BookWebTitle, HeaderImg, TitleDiv } from './HeaderStyles';
import { AnonymousDiv } from './AnonymousDiv';
import { LoggedDiv } from './LoggedDiv';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const Header = ({ isLogged }) => {
  const user = useSelector((state: RootState) => state.user?.user);
  const LogView = user ? <LoggedDiv userName={user.name} /> : <AnonymousDiv />;

  return (
    <HeaderComponent>
      <TitleDiv>
        <HeaderImg src={process.env.PUBLIC_URL + '/book.png'} alt="book icon"></HeaderImg>
        <BookWebTitle>BookWeb</BookWebTitle>
      </TitleDiv>
      {LogView}
    </HeaderComponent>
  );
};
