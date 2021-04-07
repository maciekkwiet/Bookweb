import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

const renderWithWraper = (children) => {
  return render(<ToastProvider>{children}</ToastProvider>);
};

describe('RegistrationForm', () => {
  it('render without crash', () => {
    // <ToastProvider>
    // <Provider store={store}>
    // {}
    // </Provider>
    // </ToastProvider>
  });
});
