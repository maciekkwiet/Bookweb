import { Story } from '@storybook/react';
import Input, { InputProps } from '../Input/Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Input',
  component: Input,
  decorators: [(Story: any) => <Story />],
};

const basePropsData = {
  type: 'text',
  placeholder: 'Wpisz tekst',
};

export const PrimaryInput: Story<InputProps> = () => <Input {...basePropsData} />;
