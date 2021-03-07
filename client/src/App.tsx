import { Theme } from './Theme';
import { Button } from './Components/Button/Button';

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
    </Theme>
  );
}

export default App;
