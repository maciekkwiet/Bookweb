import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastProvider } from 'react-toast-notifications';

import { Theme } from './Theme';
import { AppRoutes } from './routing/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { LoggedHomePage } from '../src/Pages/LoggedHomePage'


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastProvider>
          <Theme>
            <LoggedHomePage />
            <AppRoutes />
          </Theme>
          <ReactQueryDevtools initialIsOpen={false} />
        </ToastProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
