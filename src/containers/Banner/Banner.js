import React from 'react';
import styles from './Banner.module.css';
import Inputs from '../../components/Inputs/Inputs';

const Banner = () => {
  const { banner, header, controlPanel, subheader } = styles;

  return (
    <div className={banner}>
      <div className={controlPanel}>
        <h1 className={header}>Curiosity</h1>
        <h4 className={subheader}>THE MARS ROVER LOOKUP TOOL</h4>
        <Inputs />
      </div>
    </div>
  );
};

export default Banner;
