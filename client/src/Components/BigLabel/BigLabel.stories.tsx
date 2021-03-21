import { Story } from '@storybook/react';

import { BigLabel, BigLabelComponentProps } from './BigLabel';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'BigLabel',
  component: BigLabel,
  decorators: [(Story: any) => <Story />],
};
const PrimaryBigLabelProps = {
  title: 'Tytuł książki/Autor/Dodaj książkę',
}
export const PrimaryBigLabel: Story<BigLabelComponentProps> = () => <BigLabel {...PrimaryBigLabelProps} />

