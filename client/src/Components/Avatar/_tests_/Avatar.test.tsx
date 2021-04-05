import { screen, render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';

import Avatar, { defaultAvatarImage } from '../Avatar';
import { UserType } from '../../../Actions/userSlice';
import { store } from '../../../app/store';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const testImg = 'test-img.jpg';
const exampleUser: UserType = {
  id: 1,
  name: 'user',
  surname: 'user',
  email: 'user@gmail.com',
  password: 'hash',
  avatar: testImg,
};

describe('Avatar', () => {
  afterAll(cleanup);

  const renderAvatarImage = () => {
    render(
      <Provider store={store}>
        <Avatar />
      </Provider>,
    );
  };

  it('Renders without crash', () => {
    renderAvatarImage();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('Image should have alt = "User avatar"', async () => {
    renderAvatarImage();
    const avatar = screen.getByRole('img');

    expect(avatar).toHaveAttribute('alt', 'User avatar');
  });

  it('Should render with default image source', async () => {
    renderAvatarImage();
    const avatar = screen.getByRole('img');

    expect(avatar).toHaveAttribute('src', defaultAvatarImage);
  });

  //add later when login will be ready

  // it('Should set image source to user avatar after logging in', () => {
  //   store.dispatch(login([exampleUser]));
  //   renderAvatarImage();

  //   const avatar = screen.getByRole('img');
  //   expect(avatar).toHaveAttribute('src', testImg);
  // });
});
