import { LogDiv } from './LoginDivStyles';
import { Avatar } from '../Avatar/Avatar';
import { UserName } from './LoginDivStyles';

export const LoginDiv = () => {
  return (
    <LogDiv>
      <Avatar userID={'id'} />
      <UserName>Username</UserName>
    </LogDiv>
  );
};
