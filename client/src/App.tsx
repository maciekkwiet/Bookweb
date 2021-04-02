import { Theme } from './Theme';
import { AppRoutes } from './routing/AppRoutes';
import { Provider } from 'react-redux';
import store from './app/store';


function App() {
  return (
    <Provider store={store}>
      <Theme>
        <AppRoutes />
      </Theme>
    </Provider>
  );
}

export default App;
