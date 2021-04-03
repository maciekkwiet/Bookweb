import { Story } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'HeaderComponent',
  component: Header,
  decorators: [(Story: any) => <Story />],
};

export const AnonymousHeader: Story = (args) => <Header isLogged={false} />;
export const LoggedHeader: Story = (args) => <Header isLogged={true} />;
