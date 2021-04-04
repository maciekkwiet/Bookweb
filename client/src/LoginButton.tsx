import React from 'react';
import { login } from './Features/User/UserSlice';
import { useDispatch } from 'react-redux';

export default function LoginButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    fetch(`http://localhost:8080/api/users/39`)
      .then((res) => res.json())
      .then((user) => dispatch(login(user)))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleClick}>ZALOGU USERA #39</button>
    </div>
  );
}
