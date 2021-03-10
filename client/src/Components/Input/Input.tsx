import React from 'react';
import { InputComponent } from './InputStyles';

export type InputProps = {
  type: string;
  placeholder?: string;
  onChange?: () => void;
  isRequired?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ type, placeholder, onChange, isRequired = false, ...otherProps }: InputProps) => {
  return (
    <InputComponent
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...otherProps}
      required={isRequired}
      data-testid="InputId"
    />
  );
};

export default Input;
