import { Head } from './HeaderStyles';
import { HeaderList } from './HeaderStyles';
import { HeaderComponent } from './HeaderStyles';
import books from './books.png';

export const Header = () => {
  return (
    <HeaderComponent>
      <Head>To tutaj:</Head>
      <HeaderList>
        <li>Dowiesz się co warto przeczytać</li>
        <li>Zaplanujesz najbliższą przygodę z książką</li>
        <li>Stworzysz kolekcję swoich ulubionych tytułów</li>
        <li>Ocenisz przeczytane książki</li>
        <li>Zaprosisz znajomych i dowiesz się co czytają</li>
      </HeaderList>
      <img src={books} alt="books icon"></img>
    </HeaderComponent>
  );
};
