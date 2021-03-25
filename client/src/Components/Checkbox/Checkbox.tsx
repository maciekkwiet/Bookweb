import React, { useState } from 'react';
import { CheckboxComponent } from './CheckboxComponent';
import { Label } from './CheckboxStyles';

interface ICheckboxProps {
  genre: string;
}

export const Checkbox = ({ genre }: ICheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <Label>
        <CheckboxComponent checked={checked} onChange={handleCheckboxChange} />
        <span>{genre}</span>
      </Label>
    </div>
  );
};
