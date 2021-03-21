import { Story } from '@storybook/react';

import { ShadowImage, ShadowImageComponentProps } from './ShadowImage';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Image',
  component: Image,
};

const Template: Story<ShadowImageComponentProps> = (args) => <ShadowImage {...args} />;

export const PrimaryImage = Template.bind({});
PrimaryImage.args = {
  src: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
  alt: 'cover',
};
