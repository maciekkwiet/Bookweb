import { MemoryRouter, Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Navbar } from '../Navbar';

describe('Navbar', () => {
  it('render without crash', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });

  it('redirects to ranking page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Navbar />
      </Router>,
    );
    const rankingLink = screen.queryByTestId('RankingLinkId');
    if (rankingLink) userEvent.click(rankingLink);
    expect(history.location.pathname).toBe('/ranking');
  });

  it('changes the icon after click', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const burger = screen.queryByTestId('BurgerId');

    const burgerIcon = screen.queryByTestId('BurgerIconId');
    expect(burger?.children).toContain(burgerIcon);

    if (burger) userEvent.click(burger);

    const closeIcon = screen.queryByTestId('CloseIconId');
    expect(burger?.children).toContain(closeIcon);
  });

  it('called function atfer click on burger', () => {
    const mockCallback = jest.fn();
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const burger = screen.queryByTestId('BurgerId');
    if (burger) burger.onclick = mockCallback;
    if (burger) userEvent.click(burger);
    expect(mockCallback).toHaveBeenCalled();
  });
});
