import { render } from '@testing-library/react';
import { theme } from '../../../Theme';
import { RegistrationForm } from '../RegistrationForm';
import { ThemeProvider } from 'styled-components';


describe('RegistrationForm', () => {
  it('render without crash', () => {


    render(
      <ThemeProvider theme={theme}>
        <RegistrationForm></RegistrationForm>
      </ThemeProvider>,
    );
  });




});