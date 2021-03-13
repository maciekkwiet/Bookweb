import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Input } from './StarStyles';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <Input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? 'C92523' : '#e4e5e9'}
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
