import { Theme } from './Theme';
import { AppRoutes } from './routing/AppRoutes';
import { RegistrationForm } from './Components/RegistrationForm/RegistrationForm'

function App() {
  return (
    <Theme>
      <RegistrationForm />
      <AppRoutes />
    </Theme>
  );
}

export default App;
