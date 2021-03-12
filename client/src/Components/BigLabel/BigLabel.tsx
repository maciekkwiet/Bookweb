import React from 'react';
import { BigLabelComponent } from './BigLabelStyles';

export type BigLabelComponentProps = {
  children: string;
}

export const BigLabel = ({ children, ...otherProps }: BigLabelComponentProps) => {
  return (
    <BigLabelComponent  {...otherProps} data-testid="BigLabelId">
      {children}
    </BigLabelComponent>
  );
};