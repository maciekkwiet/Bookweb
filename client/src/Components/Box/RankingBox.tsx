import { FC } from 'react';
import {
  BoxComponent,
  ImgContainer,
  BookParagraph,
  BookTitleParagraph,
  BoxReadMore,
  BookImage,
} from './BigBoxStyles';

import { BookDetails } from '../TopBooks/TopBooksComponent';



export const RankingBox: FC<BookDetails> = ({ title, id, rating, author, review, cover }) => {
  const readMoreHandler = () => { };

  return (
    <BoxComponent data-testid="BoxId">
      <ImgContainer>
        <BookImage src={cover}></BookImage>
      </ImgContainer>
      <BookTitleParagraph>{title}</BookTitleParagraph>
      <BookParagraph>{author}</BookParagraph>
      <BookParagraph>Średnia ocena: {rating}</BookParagraph>
      <BoxReadMore onClick={readMoreHandler} data-testid="BoxReadMoreId">
        czytaj więcej
       </BoxReadMore>
    </BoxComponent>
  );
};