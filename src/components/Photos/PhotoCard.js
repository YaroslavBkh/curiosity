import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ photo }) => {
  return (
    <div>
      <a href={photo.img_src} target="new">
        <img src={photo.img_src} width="300" alt="Mars surface" />
      </a>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    img_src: PropTypes.string.isRequired
  }).isRequired
};

export default PhotoCard;
