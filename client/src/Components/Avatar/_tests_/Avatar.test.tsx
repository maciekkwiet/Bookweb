import { screen, render, cleanup } from '@testing-library/react';

import Avatar, { defaultAvatarImage } from '../Avatar';

//Change to proper testing of async useEffect
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Avatar', () => {
  afterAll(cleanup);

  const renderAvatarImage = (userID) => {
    render(<Avatar userID={userID} />);
  };

  it('Renders without crash', () => {
    renderAvatarImage('1');
    expect(screen.getByRole('img')).toBeTruthy();
  });

  it('Image should have alt = "User avatar"', async () => {
    renderAvatarImage('1');
    const avatar = screen.getByRole('img');

    await sleep(200);
    expect(avatar).toHaveAttribute('alt', 'User avatar');
  });

  it('Should set backup image if fetch fails', async () => {
    renderAvatarImage('a');
    const avatar = screen.getByRole('img');

    await sleep(200);
    expect(avatar).toHaveAttribute('src', defaultAvatarImage);
  });
});
