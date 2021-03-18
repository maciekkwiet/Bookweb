import React from 'react';
import { BoxComponent, ImgContainer, ContentContainer, BookParagraph, BoxBookReview, BoxReadMore, BookImage } from './BoxStyles';

export type BoxComponentProps = {
  title: string;
  author: string;
  rate: number;
  review: string;
  image: string;
}

export const Box = ({ title, author, rate, review, image }: any) => {

  const readMoreHandler = () => { };

  return (
    <BoxComponent data-testid="BoxId">
      <ImgContainer>
        <BookImage src={image}></BookImage>
      </ImgContainer>
      <ContentContainer>
        <BookParagraph style={{ fontWeight: 'bold' }}>{title}</BookParagraph>
        <BookParagraph>{author}</BookParagraph>
        <BookParagraph>Średnia ocena: {rate}</BookParagraph>
        <BoxBookReview>
          {review}
          <BoxReadMore onClick={readMoreHandler} data-testid="BoxReadMoreId">czytaj więcej</BoxReadMore>
        </BoxBookReview>
      </ContentContainer>
    </BoxComponent>
  );
};