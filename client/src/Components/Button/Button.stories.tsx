import { Story } from '@storybook/react';

import { Button, ButtonComponentProps } from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
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
    // eslint-disable-next-line no-console
    console.log('test buton render');
  },
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Button',
  onClick: () => {
    // eslint-disable-next-line no-console
    console.log('test buton render');
  },
  disabled: true,
};
