import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const ProductRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = (rating % 1).toFixed(1);

  let i = 0;

  const renderStars = () => {
    const stars = [];

    for (i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} style={{ color: '#ff8000' }}>
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
          </span>
        );
      }
    }

    if (fullStars < 5) {
      if (decimalPart > 0 && decimalPart < 0.5) {
        stars.push(
          <span key={i} style={{ color: '#ff8000' }}>
            <i>
              <FontAwesomeIcon icon={faStarHalf} />
            </i>
          </span>
        );
      }
    }

    if (decimalPart > 0.4 && decimalPart <= 0.9) {
      stars.push(
        <span key={i} style={{ color: '#ff8000' }}>
          <i>
            <FontAwesomeIcon icon={faStar} />
          </i>
        </span>
      );
    }
    return stars;
  };
  return <div>{renderStars()}</div>;
};

export default ProductRating;
