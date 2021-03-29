import { useState } from 'react';

import { LogInput, LogDiv, LogButton } from './AnonymousDivStyles';

export const AnonymousDiv = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <LogDiv>
      <LogInput type={'email'} placeholder={'adres e-mail'} required={true} />
      <LogInput type={'password'} placeholder={'hasło'} required={true} />
      <LogButton>ZALOGUJ</LogButton>
    </LogDiv>
  );
};
