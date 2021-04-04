import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Navbar } from '../Navbar/Navbar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const PrimaryNavbar: Story = () => <Navbar />;
