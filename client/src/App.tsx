import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import StarRating from './Components/Star/StarRating';
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
    </Theme>
  );
}

export default App;
