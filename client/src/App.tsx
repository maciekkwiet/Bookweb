import { Theme } from './Theme';
import { AppRoutes } from './routing/AppRoutes';
import { Provider } from 'react-redux';
import store from './app/store';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Theme>
          <AppRoutes />
        </Theme>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
