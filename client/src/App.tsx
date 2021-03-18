import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { TextCard } from './Components/TextCard/TextCard';

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
      <TextCard authorName="authorName" authorLastName="authorLastName" description="description"></TextCard>
    </Theme>
  );
}

export default App;
