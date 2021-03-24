import { BoxBooksContent } from '../../constants';
import { BoxBooksComponent, BoxBooksTitle, BoxBooksParagraph, BoxBooksImage } from './BoxBooksStyles';

export const BoxBooks = () => {
  return (
    <BoxBooksComponent data-testid="BoxBooksId">
      <BoxBooksTitle>{BoxBooksContent[0]}</BoxBooksTitle>
      <BoxBooksParagraph>{BoxBooksContent[1]}</BoxBooksParagraph>
      <BoxBooksParagraph>{BoxBooksContent[2]}</BoxBooksParagraph>
      <BoxBooksParagraph>{BoxBooksContent[3]}</BoxBooksParagraph>
      <BoxBooksParagraph>{BoxBooksContent[4]}</BoxBooksParagraph>
      <BoxBooksParagraph>{BoxBooksContent[5]}</BoxBooksParagraph>
      <BoxBooksImage src={process.env.PUBLIC_URL + '/books.png'}></BoxBooksImage>
    </BoxBooksComponent>
  );
};
