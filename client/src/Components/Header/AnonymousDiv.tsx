import { useState } from 'react';

import { LogInput } from './AnonymousDivStyles';
import { LogDiv } from './AnonymousDivStyles';
import { LogButton } from './AnonymousDivStyles';

export const AnonymousDiv = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LogDiv>
      <LogInput
        type={'email'}
        placeholder={'adres e-mail'}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required={true}
      />
      <LogInput
        type={'password'}
        placeholder={'hasło'}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        required={true}
      />
      <LogButton
        onClick={() => {
          console.log('email:', email, 'password', password);
        }}
      >
        ZALOGUJ
      </LogButton>
    </LogDiv>
  );
};
