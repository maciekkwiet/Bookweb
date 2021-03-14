import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import ReactStars from 'react-stars';

function App() {
  return (
    <Theme>
      <Button onClick={() => {}}>Zobacz pełny opis</Button>
      <ReactStars count={5} size={24} color2={'#C92523'} />
    </Theme>
  );
}

export default App;
