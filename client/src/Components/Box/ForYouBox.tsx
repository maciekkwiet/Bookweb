import { FC } from 'react';
import {
  BoxComponent,
  ImgContainer,
  ContentContainer,
  BookParagraph,
  BookTitleParagraph,
  BoxBookReview,
  BoxReadMore,
  BookImage,
} from './ForYouBoxStyles';
import { BookDetails } from '../TopBooks/TopBooksComponent';

export type BoxComponentProps = {
  book_id?: number;
  title: string;
  cover: string;
  description?: string;
  author_id?: number;
  name?: string;
  surname?: string;
  book_groups?: string;
  score: number;
  user_id?: number;
  email?: string;
  author?: string;

};

export const ForYouBox: FC<BookDetails> = ({ title, id, rating, author, review, cover }) => {
  const readMoreHandler = () => { };

  return (
    <BoxComponent data-testid="BoxId">
      <ImgContainer>
        <BookImage src={cover}></BookImage>
      </ImgContainer>
      <ContentContainer>
        <BookTitleParagraph>{title}</BookTitleParagraph>
        <BookParagraph>{author}</BookParagraph>
        <BookParagraph>Średnia ocena: {rating}</BookParagraph>
        <BoxBookReview>
          {review.slice(0, 200)}
          <BoxReadMore onClick={readMoreHandler} data-testid="BoxReadMoreId">
            czytaj więcej
          </BoxReadMore>
        </BoxBookReview>
      </ContentContainer>
    </BoxComponent>
  );
};
