import { FC } from 'react';

import { Box } from '../Box/Box';
import StarRating from '../Star/StarRating';
import { ActivityTitle } from './UserAcitivityBoxStyles';
import { ActivityBox } from './UserAcitivityBoxStyles';
import { RatingDiv } from './UserAcitivityBoxStyles';

export type UserActivityBoxProps = {
  title: string;
  author: string;
  rate: number;
  review: string;
  image: string;
  username: string;
};

export const UserActivityBox: FC<UserActivityBoxProps> = ({ title, author, rate, review, image, username }) => {
  return (
    <ActivityBox>
      <RatingDiv>
        <ActivityTitle> {username} ocenił ksiązkę </ActivityTitle>
        <StarRating />
      </RatingDiv>
      <Box
        title="Securing DevOps"
        author="Julien Vehent"
        rate={5}
        review="An application running in the cloud can benefit from incredible efficiencies "
        image="https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg"
      ></Box>
    </ActivityBox>
  );
};
