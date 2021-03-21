import { Story } from '@storybook/react';

import Avatar, { avatarProps } from './Avatar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Avatar',
  component: Avatar,
  decoators: [(Story: any) => <Story />],
};

const basePropsData = {
  userID: '39',
  src: 'https://data.whicdn.com/images/346235402/original.jpg',
  alt: 'Avatar Image',
};

export const AvatarExample: Story<avatarProps> = () => <Avatar {...basePropsData} />;
