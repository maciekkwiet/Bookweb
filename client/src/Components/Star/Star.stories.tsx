import { Story } from '@storybook/react';

import StarRating from './StarRating';

import { action } from '@storybook/addon-actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Star',
  component: StarRating,
  decorators: [(Story: any) => <Story />],
};

const Template: Story = (args) => <StarRating {...args} />;

export const Star = Template.bind({});
Star.args = {
  children: 'Star',
  onClick: action('onClick'),
};
