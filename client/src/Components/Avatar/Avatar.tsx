import React, { FC, useEffect, useState } from 'react';
import { AvatarComponent } from './AvatarStyles';

export interface avatarProps {
  userID: string;
}

export const defaultAvatarImage = 'https://data.whicdn.com/images/346235402/original.jpg';

const Avatar: FC<avatarProps> = ({ userID }) => {
  const [avatarImage, setAvatarImage] = useState(defaultAvatarImage);

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${userID}`)
      .then((res) => res.json())
      .then((user) => {
        setAvatarImage(user[0].avatar);
      })
      .catch((err) => console.warn('Failed to fetch user data'));
  }, [userID]);

  return <AvatarComponent src={avatarImage} alt="User avatar" />;
};

export default Avatar;
