import { Story } from '@storybook/react';

import { RegistrationForm } from './RegistrationForm';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'RegistrationForm',
  component: RegistrationForm,
  decorators: [(Story: any) => <Story />],
};

export const PrimaryRegistrationForm: Story = () => <RegistrationForm onSubmit={() => console.log('onSubmit')} />;
