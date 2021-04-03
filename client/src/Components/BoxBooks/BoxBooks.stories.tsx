import { Story } from '@storybook/react';

import { BoxBooks } from './BoxBooks';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'BoxBooks',
  component: BoxBooks,
  decorators: [(Story: any) => <Story />],
};

export const PrimaryBoxBooks: Story = () => <BoxBooks />;
