import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { Tag } from './Components/Tag/Tag';

function App() {
  return (
    <Theme>
      <Button onClick={() => {}}>Zobacz pełny opis</Button>
      <Tag url=":id/profil" text="Zobacz pelny opis"></Tag>
    </Theme>
  );
}

export default App;
