import React from 'react';
import { InputComponent } from './InputStyles';

export interface InputProps {
  type: string;
  placeholder?: string;
  inputValue?: string;
  onChange?: () => void;
  isRequired?: boolean;
}

const Input = ({ type, placeholder, inputValue, onChange, isRequired = false, ...otherProps }: InputProps) => {
  return (
    <label>
      <InputComponent
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        {...otherProps}
        required={isRequired}
        data-testid="InputId"
      />
    </label>
  );
};

export default Input;
