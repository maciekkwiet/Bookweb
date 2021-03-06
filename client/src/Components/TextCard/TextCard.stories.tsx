import { Story } from '@storybook/react';

import { TextCard, TextCardComponentProps } from './TextCard';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'TextCard',
  component: TextCard,
  decorators: [(Story: any) => <Story />],
};

const PrimaryTextCardProps = {
  authorName: 'authorName',
  authorLastName: 'authorLastName',
  description: 'description',
};

export const PrimaryTextCard: Story<TextCardComponentProps> = () => <TextCard {...PrimaryTextCardProps} />;
