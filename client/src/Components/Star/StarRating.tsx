import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import { theme } from '../../Theme';
import { Input } from './StarStyles';

const StarRating = ({ getNumberOfStars, rate = 0, disabled = false }) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              disabled={disabled}
              onClick={() => {
                setRating(ratingValue);
                getNumberOfStars(ratingValue);
              }}
            />
            <FaStar
              className="star"
              color={
                ratingValue <= ((!disabled && hover) || rating)
                  ? theme.colors.checkkedStars
                  : theme.colors.uncheckedStars
              }
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
