import { ThemeProvider } from 'styled-components';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';
import axios from 'axios';
import { store } from '../../../app/store';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { theme } from '../../../Theme';
import { RegistrationForm } from '../RegistrationForm';

const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);

describe('RegistrationForm', () => {
  it('render without crash', async () => {
    const handleSubmit = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <RegistrationForm onSubmit={handleSubmit} />
      </ThemeProvider>,
    );

    const name = screen.getByPlaceholderText('podaj nazwę użytkownika');
    const email = screen.getByPlaceholderText('podaj email');
    const password = screen.getByPlaceholderText('wpisz hasło');
    const confirmPassword = screen.getByPlaceholderText('powtórz hasło');

    userEvent.type(name, 'test1');
    userEvent.type(email, 'test1@wp.pl');
    userEvent.type(password, 'test1test1');
    userEvent.type(confirmPassword, 'test1test1');

    const button = screen.getByTestId('buttonId');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'test1',
        email: 'test1@wp.pl',
        password: 'test1test1',
        confirmPassword: 'test1test1',
      }),
    );

    //przetestować wywołanie zapytania z redux toolkit
  });
});
