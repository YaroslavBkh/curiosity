import React from 'react';
import styles from './Banner.module.css';
import Inputs from '../../components/Inputs/Inputs';

const Banner = () => {
  const { banner, header } = styles;

  return (
    <div className={banner}>
      <h1 className={header}>Curiosity</h1>
      <h4>THE MARS ROVER LOOKUP TOOL</h4>
      <Inputs />
    </div>
  );
};

export default Banner;
