import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import { Tag } from '../Tag';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as {}),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Tag', () => {
  it('Redirects to correct URL on click', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Tag url="test" text="herbatka?!" />
      </MemoryRouter>,
    );

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/test');
  });
});
