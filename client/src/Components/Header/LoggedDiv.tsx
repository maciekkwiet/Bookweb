import { LogDiv, UserName } from './LoggedDivStyles';
import { Avatar } from '../Avatar/Avatar';

export const LoggedDiv = ({ userID, userName }) => {
  return (
    <LogDiv>
      <Avatar userID={userID} />
      <UserName>{userName}</UserName>
    </LogDiv>
  );
};
