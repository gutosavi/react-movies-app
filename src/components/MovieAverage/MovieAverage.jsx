import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const MovieAverage = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return starValue <= Math.round(rating / 2) ? (
          <FaStar key={index} color="#ffc107" />
        ) : (
          <FaRegStar key={index} color="#222" />
        );
      })}
    </>
  );
};

export default MovieAverage;
