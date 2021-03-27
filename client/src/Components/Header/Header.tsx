import { HeaderComponent } from './HeaderStyles';
import { BookWebTitle } from './HeaderStyles';
import { HeaderImg } from './HeaderStyles';
import { TitleDiv } from './HeaderStyles';
import { AnonymousDiv } from './AnonymousDiv';
import { LoggedDiv } from './LoggedDiv';

export const Header = ({ isLogged }) => {
  let LogView;
  if (isLogged) {
    LogView = <LoggedDiv userName="userName" userID="userName" />;
  } else {
    LogView = <AnonymousDiv />;
  }
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
