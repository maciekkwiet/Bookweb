import { Story } from '@storybook/react';
import { Shelf, ShelfComponentProps } from './Shelf';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Shelf',
  component: Shelf,
  decorators: [(Story: any) => <Story />],
};
const PrimaryShelfProps = {
  title: 'Chcę przeczytać',
  apiUrl: '',
};
export const PrimaryBox: Story<ShelfComponentProps> = () => <Shelf {...PrimaryShelfProps} />;
