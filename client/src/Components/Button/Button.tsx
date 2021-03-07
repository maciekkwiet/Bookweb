import React from 'react';
import { ButtonComponent } from './ButtonStyles';

export type ButtonComponentProps = {
  children: HTMLCollection | string;
  onClick: () => void;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ onClick, children, disabled = false, ...otherProps }: ButtonComponentProps) => {
  return (
    <ButtonComponent onClick={onClick} {...otherProps} disabled={disabled} data-testid="ButtonId">
      {children}
    </ButtonComponent>
  );
};
