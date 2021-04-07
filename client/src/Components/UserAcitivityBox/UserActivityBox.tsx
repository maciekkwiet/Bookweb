import { FC } from 'react';
// import {
//   BoxComponent,
//   ImgContainer,
//   ContentContainer,
//   BookParagraph,
//   BookTitleParagraph,
//   BoxBookReview,
//   BoxReadMore,
//   BookImage,
// } from './UserAcitivityBoxStyles';
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

// export const Box: FC<BoxComponentProps> = ({ title, author, rate, review, image }) => {
//   const readMoreHandler = () => {};

//   return (
//     <BoxComponent data-testid="BoxId">
//       <ImgContainer>
//         <BookImage src={image}></BookImage>
//       </ImgContainer>
//       <ContentContainer>
//         <BookTitleParagraph>{title}</BookTitleParagraph>
//         <BookParagraph>{author}</BookParagraph>
//         <BookParagraph>Średnia ocena: {rate}</BookParagraph>
//         <BoxBookReview>
//           {review}
//           <BoxReadMore onClick={readMoreHandler} data-testid="BoxReadMoreId">
//             czytaj więcej
//           </BoxReadMore>
//         </BoxBookReview>
//       </ContentContainer>
//     </BoxComponent>
//   );
// };

export const UserActivityBox: FC<UserActivityBoxProps> = ({ title, author, rate, review, image, username }) => {
  const readMoreHandler = () => {};

  return (
    <ActivityBox>
      <RatingDiv>
        <ActivityTitle> {username} ocenił ksiązkę </ActivityTitle>
        <StarRating />
      </RatingDiv>
      <Box title="title" author="author" rate={5} review="review" image="image"></Box>
    </ActivityBox>
  );
};
