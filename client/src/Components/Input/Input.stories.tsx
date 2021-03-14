import { Story } from '@storybook/react';
import Input, { InputProps } from '../Input/Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Input',
  component: Input,
  decorators: [(Story: any) => <Story />],
};

export const PrimaryInput: Story<InputProps> = (basePropsData) => <Input {...basePropsData} />;

PrimaryInput.args = {
  type: 'text',
  placeholder: 'Wpisz tekst',
};
