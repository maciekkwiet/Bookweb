import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import { theme } from '../../Theme';
import { Input } from './StarStyles';

const StarRating = ({ numberOfStars }) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <Input type="radio" name="rating" value={ratingValue} />
            <FaStar
              className="star"
              color={ratingValue <= numberOfStars ? theme.colors.checkkedStars : theme.colors.uncheckedStars}
              size={25}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
