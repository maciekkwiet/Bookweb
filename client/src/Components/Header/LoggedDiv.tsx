import { LogDiv } from './LoggedDivStyles';
import { Avatar } from '../Avatar/Avatar';
import { UserName } from './LoggedDivStyles';

export const LoggedDiv = ({ userID, userName }) => {
  return (
    <LogDiv>
      <Avatar userID={userID} />
      <UserName>{userName}</UserName>
    </LogDiv>
  );
};
