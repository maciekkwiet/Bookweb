import { Story } from '@storybook/react';

import { Tag, TagComponentProps } from './Tag';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Tag',
  component: Tag,
  decorators: [(Story: any) => <Story />],
};

const Template: Story<TagComponentProps> = (args) => <Tag {...args} />;

export const PrimaryTag = Template.bind({});
PrimaryTag.args = {
  text: 'Zobacz wiecej',
  url: '/api/books/:id',
};
