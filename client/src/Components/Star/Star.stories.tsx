import { Story } from '@storybook/react';
import ReactStars from 'react-stars';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Star',
  component: ReactStars,
  decorators: [(Story: any) => <Story />],
};

const Template: Story = (args) => <ReactStars {...args} />;

export const Star = Template.bind({});
Star.args = {
  children: 'Star',
  color2: '#C92523',
  onClick: () => {
    // eslint-disable-next-line no-console
    console.log('test star render');
  },
};
