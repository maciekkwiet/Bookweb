import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../Theme';
import { Box } from '../Box';


describe('BoxCard', () => {
  it('render without crash', () => {
    const mockCallback = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Box
          title="Securing DevOps"
          author="Julien Vehent"
          rate='5'
          review="An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks  ..."
          image="https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg"
        >

        </Box>
      </ThemeProvider>,
    );
  });
});