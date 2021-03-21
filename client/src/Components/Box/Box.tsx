import { FC } from 'react';
import { BoxComponent, ImgContainer, ContentContainer, BookParagraph, BookTitleParagraph, BoxBookReview, BoxReadMore, BookImage } from './BoxStyles';

export type BoxComponentProps = {
  title: string;
  author: string;
  rate: number;
  review: string;
  image: string;
}

export const Box: FC<BoxComponentProps> = ({ title, author, rate, review, image }) => {

  const readMoreHandler = () => { };

  return (
    <BoxComponent data-testid="BoxId">
      <ImgContainer>
        <BookImage src={image}></BookImage>
      </ImgContainer>
      <ContentContainer>
        <BookTitleParagraph>{title}</BookTitleParagraph>
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