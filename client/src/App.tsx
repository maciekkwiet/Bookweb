import { Theme } from './Theme';
import { AppRoutes } from './routing/AppRoutes';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <Theme>
      <AppRoutes />
      <Header />
    </Theme>
  );
}

export default App;
