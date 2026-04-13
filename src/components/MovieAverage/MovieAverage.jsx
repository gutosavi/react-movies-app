import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const MovieAverage = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return starValue <= Math.round(rating / 2) ? (
          <FaStar color="#ffc107" />
        ) : (
          <FaRegStar />
        );
      })}
    </div>
  );
};

export default MovieAverage;
