import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useState, useEffect } from 'react'
import { RegisterHomePage } from './RegisterHomePage';
import { LoggedHomePage } from './LoggedHomePage';

export const HomePage = () => {

  const user = useSelector((state: RootState) => state.user?.user);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    user ? setIsLogged(true) : setIsLogged(false)
  }, [user]);

  return (
    <>
      {isLogged ? <LoggedHomePage /> : <RegisterHomePage />}
    </>
  );
};
