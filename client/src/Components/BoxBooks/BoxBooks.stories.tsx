import { Story } from '@storybook/react';

import { BoxBooks, BoxBooksComponentProps } from './BoxBooks';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'BoxBooks',
  component: BoxBooks,
  decorators: [(Story: any) => <Story />],
};
const PrimaryBoxBooksProps = {

}
export const PrimaryBoxBooks: Story<BoxBooksComponentProps> = () => <BoxBooks {...PrimaryBoxBooksProps} />