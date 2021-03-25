import React from 'react';
import { BigLabelComponent } from './BigLabelStyles';

export type BigLabelComponentProps = {
  title: string;
};

export const BigLabel = ({ title, ...otherProps }: BigLabelComponentProps) => {
  return (
    <BigLabelComponent {...otherProps} data-testid="BigLabelId">
      {title}
    </BigLabelComponent>
  );
};
