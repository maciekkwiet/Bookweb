import { screen, render, cleanup } from '@testing-library/react';
import Avatar from '../Avatar';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Avatar', () => {
  afterAll(cleanup);

  const renderImage = (userID) => {
    render(<Avatar userID={userID} />);
  };

  it('Renders without crash', () => {
    renderImage('39');
  });

  it('Image should have alt = "User avatar" and src attribute for user with ID=39', async () => {
    renderImage('39');
    const avatar = screen.getByRole('img');

    await sleep(200);
    expect(avatar).toHaveAttribute('alt', 'User avatar');
    expect(avatar).toHaveAttribute('src');
  });

  it('Should set backup image if fetch fails', async () => {
    renderImage('a');
    const avatar = screen.getByRole('img');

    await sleep(200);
    expect(avatar).toHaveAttribute('src', 'https://data.whicdn.com/images/346235402/original.jpg');
  });
});
