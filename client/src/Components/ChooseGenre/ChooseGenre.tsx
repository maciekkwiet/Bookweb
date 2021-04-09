import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Container, SelectGenre, SubmitButton } from './ChooseGenreStyles';

const mainGenresEntries = [
  { value: 'beletrystyka', label: 'Beletrystyka' },
  { value: 'popularnonaukowe', label: 'Literatura popularnonaukowa' },
  { value: 'dzieciece', label: 'Literatura dziecięca' },
];

const subGenresEntries = {
  beletrystyka: [
    { value: 'fantastyka', label: 'Fantastyka' },
    { value: 'horror', label: 'Horror' },
    { value: 'klasyka', label: 'Klasyka' },
    { value: 'thriller', label: 'Sensacja, thriller' },
    { value: 'mlodziezowa', label: 'Literatura młodzieżowa' },
    { value: 'obyczajowa', label: 'Literatura obyczajowa, romans' },
    { value: 'piekna', label: 'Literatura piękna' },
    { value: 'historyczne', label: 'Powieści historyczne' },
    { value: 'przygodowe', label: 'Powieści przygodowe' },
  ],
  popularnonaukowa: [
    { value: 'astronomia', label: 'Astronomia, astrofizyka' },
    { value: 'finanse', label: 'Biznes, finanse' },
    { value: 'encyklopedie', label: 'Encyklopedie, słowniki' },
    { value: 'filozofia', label: 'Filozofia' },
    { value: 'przyroda', label: 'Flora i fauna' },
    { value: 'historia', label: 'Historia' },
    { value: 'matematyka_informatyka', label: 'Informatyka, matematyka' },
    { value: 'fizyka_chemia_biologia', label: 'Nauki przyrodnicze (fizyka, chemia, biologia itp.)' },
    { value: 'spoleczne', label: 'Nauki społeczne (psychologia, socjologia itd.)' },
    { value: 'dla_rodzicow', label: 'Poradniki dla rodziców' },
    { value: 'techniczne', label: 'Książki techniczne' },
    { value: 'zdrowie', label: 'Zdrowie, medycyna' },
    { value: 'rozwoj', label: 'Rozwój osobisty' },
  ],
  dziecieca: [
    { value: 'bajki', label: 'Bajki' },
    { value: 'legendy', label: 'Baśnie, legendy' },
    { value: 'opowiadania', label: 'Opowiadania' },
    { value: 'nauka_dla_dzieci', label: 'Popularnonaukowe dla dzieci' },
    { value: 'wiersze', label: 'Wierszyki, piosenki' },
    { value: 'pozostale', label: 'Pozostałe' },
  ],
};

type SubGenresState = { value: string; label: string }[] | {};

const ChooseGenre = () => {
  const [mainGenre, setMainGenre] = useState<string>('');
  const [subGenres, setSubGenres] = useState<SubGenresState>();
  const [genre, setGenre] = useState<string>('');

  const handleSubGenreChange = ({ value }) => {
    setGenre(value);
  };

  const handleMainGenreChange = ({ value }) => {
    setMainGenre(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get('https://books-web-portal.herokuapp.com/api/books/findByGenre/' + genre)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const subGenresSelect = () => {
    const [beletrystyka, popularnonaukowe, dzieciece] = mainGenresEntries;

    if (mainGenre === beletrystyka.value) {
      setSubGenres(subGenresEntries.beletrystyka);
    } else if (mainGenre === popularnonaukowe.value) {
      setSubGenres(subGenresEntries.popularnonaukowa);
    } else if (mainGenre === dzieciece.value) {
      setSubGenres(subGenresEntries.dziecieca);
    }
  };

  useEffect(() => {
    subGenresSelect();
  }, [mainGenre]);

  return (
    <Container>
      Wybierz gatunek książki:
      <form action={'https://books-web-portal.herokuapp.com/api/books/findByGenre/' + genre} method="GET">
        <SelectGenre options={mainGenresEntries} onChange={handleMainGenreChange} />
        {subGenres && <SelectGenre options={subGenres} onChange={handleSubGenreChange} />}
        {subGenres && (
          <SubmitButton type="submit" onSubmit={handleSubmit}>
            Wyszukaj
          </SubmitButton>
        )}
      </form>
    </Container>
  );
};

export default ChooseGenre;
