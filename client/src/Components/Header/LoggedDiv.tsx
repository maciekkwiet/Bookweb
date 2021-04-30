import { LogDiv, UserName } from './LoggedDivStyles';
import { Avatar } from '../Avatar/Avatar';


export const LoggedDiv = ({ userName }) => {
  return (
    <LogDiv>
      <Avatar />
      <UserName>{userName}</UserName>
    </LogDiv>
  );
};
