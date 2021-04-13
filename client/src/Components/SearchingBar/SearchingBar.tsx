import { useState } from 'react';
import { SearchingBarComponent, SearchingBarForm, SearchingBarInput, SearchingBarButton } from './SearchingBarStyles';

type SearchingBarType = {
  onSubmit: (value: string) => void;
};

export const SearchingBar = ({ onSubmit }: SearchingBarType) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {};

  return (
    <SearchingBarComponent>
      <SearchingBarForm onSubmit={handleSubmit}>
        <SearchingBarInput
          type="text"
          placeholder="wpisz wyszukiwaną frazę"
          value={inputValue}
          onChange={handleChange}
          data-testid="inputId"
        />
        <SearchingBarButton type="submit" data-testid="buttonId">
          Szukaj
        </SearchingBarButton>
      </SearchingBarForm>
    </SearchingBarComponent>
  );
};
