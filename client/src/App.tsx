import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { BigLabel } from './Components/BigLabel/BigLabel';
import { BoxBooks } from './Components/BoxBooks/BoxBooks';
import Input from './Components/Input/Input';


function App() {
  return (
    <Theme>
      <BigLabel title="Tytuł książki/Autor/Dodaj"></BigLabel>
      <Button onClick={() => { }}>Zobacz pełny opis</Button>
      <BoxBooks></BoxBooks>
    </Theme>
  );
}

export default App;
