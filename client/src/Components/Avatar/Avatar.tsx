import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AvatarComponent } from './AvatarStyles';
import { IUser, selectUser } from '../../Features/User/UserSlice';

export const defaultAvatarImage = 'https://data.whicdn.com/images/346235402/original.jpg';

const Avatar: FC = () => {
  const [avatarImage, setAvatarImage] = useState(defaultAvatarImage);
  const user: IUser = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      setAvatarImage(user[0].avatar);
    }
  }, [user]);

  return <AvatarComponent src={avatarImage} alt="User avatar" />;
};

export default Avatar;
