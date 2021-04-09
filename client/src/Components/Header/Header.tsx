import { HeaderComponent, BookWebTitle, HeaderImg, TitleDiv } from './HeaderStyles';
import { AnonymousDiv } from './AnonymousDiv';
import { LoggedDiv } from './LoggedDiv';

export const Header = ({ isLogged }) => {
  const LogView = isLogged ? <LoggedDiv userName="userName" userID="userName" /> : <AnonymousDiv />;

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
