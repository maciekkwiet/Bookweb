import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { BigLabel } from './Components/BigLabel/BigLabel';
import Input from './Components/Input/Input';


function App() {
  return (
    <Theme>
      <BigLabel title="Tytuł książki/Autor/Dodaj"></BigLabel>
      <Button onClick={() => { }}>Zobacz pełny opis</Button>
    </Theme>
  );
}

export default App;
