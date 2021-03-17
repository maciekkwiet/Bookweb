import React from 'react';
import { TextCardComponent } from './TextCardStyles';

export type TextCardComponentProps = {
  title: string;
};

export const TextCard = ({ title, ...otherProps }: TextCardComponentProps) => {
  return (
    <TextCardComponent {...otherProps} data-testid="TextCardId">
      {title}
    </TextCardComponent>
  );
};
