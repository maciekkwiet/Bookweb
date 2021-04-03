import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('render app correctly', () => {
  <MemoryRouter>
    render(
    <App />
    );
  </MemoryRouter>;
});
