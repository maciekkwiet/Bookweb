import { BookImage, BookParagraph, BoxComponent, ContentContainer, ImgContainer } from '../Box/BoxStyles';
import { Description } from './BookDescriptionStyles';

type BookProps = {
  image: string;
  author: string;
  releaseDate: string;
  numberOfPages: string;
  isbn: string;
  averageRating: string;
};

export default function BookDescription({
  image,
  author,
  releaseDate,
  numberOfPages,
  isbn,
  averageRating,
}: BookProps): JSX.Element {
  return (
    <BoxComponent>
      <ImgContainer>
        <BookImage src={image} />
      </ImgContainer>
      <ContentContainer>
        <Description>{author}</Description>
        <Description>Data wydania: {releaseDate}</Description>
        <Description>Liczba stron: {numberOfPages}</Description>
        <Description>ISBN: {isbn}</Description>
        <Description>Srednia ocena: {averageRating}</Description>
      </ContentContainer>
    </BoxComponent>
  );
}
