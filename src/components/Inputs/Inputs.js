import React from 'react';
import styles from './Inputs.module.css';
import CameraSelector from './CameraSelector/CameraSelector';
import DateSelector from './DateSelector/DateSelector';
import SolSelector from './SolSelector/SolSelector';
import RoverSelector from './RoverSelector/RoverSelector';
import SearchButton from '../SearchButton/SearchButton';

const Selectors = () => {
  return (
    <div className={styles.inputs}>
      <CameraSelector />
      <DateSelector />
      <SolSelector />
      <RoverSelector />
      <SearchButton />
    </div>
  );
};

export default Selectors;
