import { Story } from '@storybook/react';

import { SearchingBar } from './SearchingBar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'SearchingBar',
  component: SearchingBar,
  decorators: [(Story: any) => <Story />],
};

export const PrimarySearchingBar: Story = () => <SearchingBar />;