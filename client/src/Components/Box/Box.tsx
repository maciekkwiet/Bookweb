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
} from './BoxStyles';

export type BoxComponentProps = {
  title: string;
  author: string;
  rate: number;
  description: string;
  cover: string;
};

export const Box: FC<BoxComponentProps> = ({ title, author, rate, description, cover }) => {
  const readMoreHandler = () => { };

  return (
    <BoxComponent data-testid="BoxId">
      <ImgContainer>
        <BookImage src={cover}></BookImage>
      </ImgContainer>
      <ContentContainer>
        <BookTitleParagraph>{title}</BookTitleParagraph>
        <BookParagraph>{author}</BookParagraph>
        <BookParagraph>Średnia ocena: {rate}</BookParagraph>
        <BoxBookReview>
          {description.slice(0, 200)}
          <BoxReadMore onClick={readMoreHandler} data-testid="BoxReadMoreId">
            czytaj więcej
          </BoxReadMore>
        </BoxBookReview>
      </ContentContainer>
    </BoxComponent>
  );
};
