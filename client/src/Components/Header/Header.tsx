// import { useState } from 'react';
import { HeaderComponent } from './HeaderStyles';
import { BookWebTitle } from './HeaderStyles';
import { HeaderImg } from './HeaderStyles';
// import { LogInput } from './HeaderStyles';
import { TitleDiv } from './HeaderStyles';
// import { LogButton } from './HeaderStyles';
import { LogoutDiv } from './LogoutDiv';
import { LoginDiv } from './LoginDiv';

export const Header = () => {
  const isLogged = false;
  let LogView;

  if (isLogged) {
    LogView = <LoginDiv />;
  } else {
    LogView = <LogoutDiv />;
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
