import { LogDiv, UserName } from './LoggedDivStyles';
import { Avatar } from '../Avatar/Avatar';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const LoggedDiv = ({ userID, userName }) => {
  const loggedUser = useSelector((state: RootState) => state.user?.user);
  return (
    <LogDiv>
      <Avatar />
      <UserName>{loggedUser?.name}</UserName>
    </LogDiv>
  );
};
