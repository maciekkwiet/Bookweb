import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { ShadowImage } from './Components/ShadowImage/ShadowImage';

function App() {
  return (
    <Theme>
      <Button onClick={() => {}}>Zobacz pełny opis</Button>
      <ShadowImage src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="book" />
    </Theme>
  );
}

export default App;
