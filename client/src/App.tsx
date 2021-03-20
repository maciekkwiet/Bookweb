import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { ShadowImage } from './Components/ShadowImage/ShadowImage';
import { BigLabel } from './Components/BigLabel/BigLabel';
import Input from './Components/Input/Input';

function App() {
  return (
    <Theme>
      <BigLabel title="Tytuł książki/Autor/Dodaj"></BigLabel>
      <Button onClick={() => {}}>Zobacz pełny opis</Button>
      <ShadowImage src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="book" />
    </Theme>
  );
}

export default App;
