import React, { useState } from 'react';
import { CheckboxComponent } from './CheckboxComponent';
import { Label } from './CheckboxStyles';

export const Checkbox = ({ genre }) => {
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
