import { Story } from '@storybook/react';
import { Provider } from 'react-redux';

import Avatar from './Avatar';
import store from '../../app/store';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Avatar',
  component: Avatar,
  decoators: [(Story: any) => <Story />],
};

export const AvatarExample: Story = () => (
  <Provider store={store}>
    <Avatar />
  </Provider>
);
