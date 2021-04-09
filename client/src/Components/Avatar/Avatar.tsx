import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AvatarComponent } from './AvatarStyles';
import { RootState } from '../../app/store';

export const defaultAvatarImage = 'https://data.whicdn.com/images/346235402/original.jpg';

export const Avatar: FC = () => {
  const [avatarImage, setAvatarImage] = useState(defaultAvatarImage);
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (user) {
      setAvatarImage(user[0].avatar);
    }
  }, [user]);

  return <AvatarComponent src={avatarImage} alt="User avatar" />;
};

export default Avatar;
