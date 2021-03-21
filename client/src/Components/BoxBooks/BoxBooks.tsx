import { FC } from 'react';
import { BoxBooksComponent, BoxBooksTitle, BoxBooksParagraph, BoxBooksImage } from './BoxBooksStyles';

export const BoxBooks = () => {
  return (
    <BoxBooksComponent data-testid="BoxBooksId">
      <BoxBooksTitle>
        To tutaj:
      </BoxBooksTitle>
      <BoxBooksParagraph>- Dowiesz się co warto przeczytać</BoxBooksParagraph>
      <BoxBooksParagraph>- Zaplanujesz najbliższą przygodę z książką</BoxBooksParagraph>
      <BoxBooksParagraph>- Stworzysz kolekcję swoich ulubionych tytułów
</BoxBooksParagraph>
      <BoxBooksParagraph>- Ocenisz przeczytane książki</BoxBooksParagraph>
      <BoxBooksParagraph>- Zaprosisz znajomych i dowiesz się co czytają</BoxBooksParagraph>
      <BoxBooksImage src={process.env.PUBLIC_URL + '/books.png'}></BoxBooksImage>
    </BoxBooksComponent>
  );
};