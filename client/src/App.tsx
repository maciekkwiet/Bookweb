import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import Input from './Components/Input/Input';

function App() {
  return (
    <Theme>
      <Button onClick={() => {}}>
        Zobacz pełny opis
      </Button>
      <Input type="text" placeholder="Wpisz haslo" />
    </Theme>
  );
}

export default App;
