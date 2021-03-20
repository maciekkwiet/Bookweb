import { Theme } from './Theme';
import { Button } from './Components/Button/Button';

import StarRating from './Components/Star/StarRating';
import { BigLabel } from './Components/BigLabel/BigLabel';
import Input from './Components/Input/Input';

function App() {
  return (
    <Theme>
      <Button
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('test');
        }}
      >
        Button
      </Button>
      <StarRating />
      <BigLabel title="Tytuł książki/Autor/Dodaj"></BigLabel>
      <Button onClick={() => {}}>Zobacz pełny opis</Button>
    </Theme>
  );
}

export default App;
