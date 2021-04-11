import { FC } from 'react';

import { Box } from '../Box/Box';
import { TopBooksComponent } from './TopBookComponentStyles';

export type BookDetails = {
  id: number;
  title: string;
  // author: string;
  rating: number;
  // review: string;
  cover: string;
};

export type TopBooksProps = {
  topBooks: BookDetails[];
};

export const TopBooksBox: FC<TopBooksProps> = ({ topBooks }) => {
  // const [topBooks, setTopBooks] = useState<BookDetailsType[]>([])

  // useEffect(() => {
  //     const fetch = async () => {
  //       const { data } = await Axios.get('/api/books/top');

  //       setTopBooks(data);
  //     };

  //     fetch();
  // });

  const booksList = topBooks.map((e) => (
    <Box
      title={e.title}
      author={'wczytywanie...'}
      rate={e.rating}
      review={'wczytywanie...'}
      image={e.cover}
      key={e.id}
    ></Box>
  ));
  return <TopBooksComponent>{booksList}</TopBooksComponent>;
};
