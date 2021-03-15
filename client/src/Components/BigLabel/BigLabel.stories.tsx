import { Story } from '@storybook/react';

import { BigLabel, BigLabelComponentProps } from './BigLabel';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'BigLabel',
  component: BigLabel,
  decorators: [(Story: any) => <Story />],
};

const Template: Story<BigLabelComponentProps> = (args) => <BigLabel {...args} />;

export const PrimaryBigLabel = Template.bind({});
PrimaryBigLabel.args = {
  title: 'Tytuł książki/Autor/Dodaj książkę',
};


