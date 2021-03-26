import { Story } from '@storybook/react';
import { Checkbox } from './Checkbox';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [(Story: any) => <Story />],
};

const basePropsData = {
  genre: 'Film akcji',
};

export const PrimaryCheckbox: Story = () => <Checkbox {...basePropsData} />;
