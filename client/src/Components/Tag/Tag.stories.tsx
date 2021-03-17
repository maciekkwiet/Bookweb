import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Tag, TagComponentProps } from './Tag';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Tag',
  component: Tag,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template: Story<TagComponentProps> = (args) => <Tag {...args} />;

export const PrimaryTag = Template.bind({});
PrimaryTag.args = {
  text: 'Zobacz pelny opis',
  url: ':id/profile',
};
