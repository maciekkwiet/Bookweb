import { Theme } from './Theme';
import { AppRoutes } from './routing/AppRoutes';
import { RegistryForm } from './Components/RegistryForm/RegistryForm'

function App() {
  return (
    <Theme>
      <RegistryForm />
      <AppRoutes />
    </Theme>
  );
}

export default App;
