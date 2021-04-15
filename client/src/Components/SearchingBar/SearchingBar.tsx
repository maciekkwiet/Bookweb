import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchingBarComponent, SearchingBarForm, SearchingBarInput, SearchingBarButton } from './SearchingBarStyles';
import { Axios } from '../../helpers/axios';
import { setInputValue } from '../../slicers/inputSlice';

type SearchingBarType = {
  onSubmit: (value: string) => void;
};

export const SearchingBar = ({ onSubmit }: SearchingBarType) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result: any = await Axios.get('/api/books/name', {
      params: {
        name: inputValue,
      },
    });
  };

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
        <SearchingBarButton onClick={handleSubmit} data-testid="buttonId">
          Szukaj
        </SearchingBarButton>
      </SearchingBarForm>
    </SearchingBarComponent>
  );
};
