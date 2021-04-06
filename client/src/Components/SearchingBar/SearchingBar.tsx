import { SearchingBarComponent, SearchingBarInput, SearchingBarButton } from './SearchingBarStyles'

export const SearchingBar = () => {


  return (
    <SearchingBarComponent>
      <SearchingBarInput
        type='text'
        placeholder='wpisz wyszukiwaną frazę'
      />
      <SearchingBarButton type='submit' onClick={() => { }} >Szukaj</SearchingBarButton>
    </SearchingBarComponent>



  )
}