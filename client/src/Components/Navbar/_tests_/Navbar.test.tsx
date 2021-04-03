import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Navbar } from '../Navbar';

describe('Navbar', () => {
  it('render without crash', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });
});
