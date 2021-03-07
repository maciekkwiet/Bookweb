import { Story } from '@storybook/react';

import { Button, ButtonComponentProps } from '../Button/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [(Story: any) => <Story />],
};

const Template: Story<ButtonComponentProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Button',
  onClick: () => {
    console.log('test buton render');
  },
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Button',
  onClick: () => {
    console.log('test buton render');
  },
  disabled: true,
};
