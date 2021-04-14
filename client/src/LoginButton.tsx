import React from 'react';
// import { login } from './Features/User/UserSlice';
import { useDispatch } from 'react-redux';

export default function LoginButton() {
  const dispatch = useDispatch();

  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>ZALOGU USERA #39</button>
    </div>
  );
}
