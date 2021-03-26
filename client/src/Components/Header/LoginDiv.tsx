import { LogDiv } from './LoginDivStyles';
import { Avatar } from '../Avatar/Avatar';

export const LoginDiv = () => {
  return (
    <LogDiv>
      <Avatar userID={'id'} />
      <span>Username</span>
    </LogDiv>
  );
};
