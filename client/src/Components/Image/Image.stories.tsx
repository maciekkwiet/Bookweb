import { Story } from '@storybook/react';

import { Image, ImageComponentProps } from './Image';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Image',
  component: Image,
};

const Template: Story<ImageComponentProps> = (args) => <Image {...args} />;

export const PrimaryImage = Template.bind({});
PrimaryImage.args = {
  src: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
  alt: 'cover',
  width: '83',
  height: '113',
};
