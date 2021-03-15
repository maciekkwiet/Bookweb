import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { Image } from './Components/Image/Image';

function App() {
  return (
    <Theme>
      <Button onClick={() => {}}>Zobacz pełny opis</Button>
      <Image src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="book" width="63" height="93" />
    </Theme>
  );
}

export default App;
