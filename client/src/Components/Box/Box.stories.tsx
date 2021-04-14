import { Story } from '@storybook/react';
import { Box, BoxComponentProps } from './Box';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Box',
  component: Box,
  decorators: [(Story: any) => <Story />],
};
const PrimaryBoxProps = {
  title: 'Securing DevOps',
  author: 'Julien Vehent',
  score: 5,
  description:
    "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks  ...",
  cover: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
};
export const PrimaryBox: Story<BoxComponentProps> = () => <Box {...PrimaryBoxProps} />;
