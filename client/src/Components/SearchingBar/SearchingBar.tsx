import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchingBarComponent, SearchingBarForm, SearchingBarInput, SearchingBarButton } from './SearchingBarStyles';
import { setInputValue } from '../../slicers/inputSlice';

type SearchingBarType = {
  onSubmit: (value: string) => void;
};

export const SearchingBar = ({ onSubmit }: SearchingBarType) => {
  const [inputValue, setValueForInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValueForInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInputValue(inputValue));
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
