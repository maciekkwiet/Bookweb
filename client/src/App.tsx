import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { CheckboxComponent } from './Components/Checkbox/CheckboxComponent';

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
      <CheckboxComponent />
    </Theme>
  );
}

export default App;
