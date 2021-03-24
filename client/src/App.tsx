import { Theme } from './Theme';
import { AppRoutes } from './routing/AppRoutes';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <Theme>
      <Navbar />
      <AppRoutes />
    </Theme>
  );
}

export default App;
