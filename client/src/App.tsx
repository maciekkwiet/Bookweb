import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { TextCard } from './Components/TextCard/TextCard';
import { AppRoutes } from './routing/AppRoutes';


function App() {
  return (
    <Theme>
      <Button>Button</Button>
      <TextCard authorName="authorName" authorLastName="authorLastName" description="description"></TextCard>
      <AppRoutes />
    </Theme>
  );
}

export default App;
