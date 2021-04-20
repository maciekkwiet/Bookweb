import { FC } from 'react';
import { BoxComponent, ImgContainer, BookParagraph, BookTitleParagraph, BoxReadMore, BookImage } from './BigBoxStyles';

import { BookDetails } from '../TopBooks/TopBooksComponent';
import { useHistory } from 'react-router-dom';

export const RankingBox: FC<BookDetails> = ({ title, id, rating, author, review, cover }) => {
  const history = useHistory();
  const readMoreHandler = () => {
    let path = `/book/${id}`;
    history.push(path);
  };

  const score = isNaN(rating) ? 'brak ocen' : rating;

  return (
    <BoxComponent data-testid="BoxId">
      <ImgContainer>
        <BookImage src={cover}></BookImage>
      </ImgContainer>
      <BookTitleParagraph>{title}</BookTitleParagraph>
      <BookParagraph>{author}</BookParagraph>
      <BookParagraph>Średnia ocena: {score}</BookParagraph>
      <BoxReadMore onClick={readMoreHandler} data-testid="BoxReadMoreId">
        czytaj więcej
      </BoxReadMore>
    </BoxComponent>
  );
};
