import React, { useState } from 'react';

import { Checkbox } from './Checkbox';
import { Label } from './Label';

export const CheckboxComponent = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => setChecked(event.target.checked);

  return (
    <div>
      <Label>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <span>Gatunek</span>
      </Label>
    </div>
  );
};
