import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { BigLabel } from './Components/BigLabel/BigLabel';


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
      <BigLabel>Tytuł książki/Autor/Dodaj</BigLabel>
    </Theme>
  );
}

export default App;
