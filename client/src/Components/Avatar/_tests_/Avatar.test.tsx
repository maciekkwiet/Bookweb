import { screen, render } from '@testing-library/react';
import { AvatarComponent } from '../AvatarStyles';

describe('Avatar', () => {
  const renderImage = (userID) => {
    render(<AvatarComponent src={`http://localhost:8080/api/users/${userID}`} alt="User avatar" />);
  };

  it('Renders without crash', () => {
    renderImage('39');
  });

  it('Image should have alt = "User avatar", src = "..api../39" for user with ID=39', () => {
    renderImage('39');
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('alt', 'User avatar');
    expect(avatar).toHaveAttribute('src', 'http://localhost:8080/api/users/39');
  });
});
