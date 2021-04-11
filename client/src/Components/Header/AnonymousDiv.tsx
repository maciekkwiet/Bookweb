import { useState } from 'react';
import { Axios } from '../../helpers/axios';
import { LogInput, LogDiv, LogButton } from './AnonymousDivStyles';

export const AnonymousDiv = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (source) => {
    const { data, status } = await Axios.post('/api/users/login', { email, password });

    if (status === 200) {
      localStorage.setItem('token', data.token);
    }
  };

  return (
    <LogDiv>
      <LogInput
        type={'email'}
        placeholder={'adres e-mail'}
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LogInput
        type={'password'}
        placeholder={'hasło'}
        required={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LogButton onClick={login}>ZALOGUJ</LogButton>
    </LogDiv>
  );
};
