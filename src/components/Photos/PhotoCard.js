import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ photo }) => {
  const { card } = styles;
  return (
    <div className={card}>
      <a href={photo.img_src} target="new">
        <img src={photo.img_src} width="100%" alt="Mars surface" />
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
