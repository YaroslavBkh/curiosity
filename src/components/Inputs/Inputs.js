import React from 'react';
import CameraSelector from './CameraSelector/CameraSelector';
import DateSelector from './DateSelector/DateSelector';
import SolSelector from './SolSelector/SolSelector';
import RoverSelector from './RoverSelector/RoverSelector';
import SearchButton from '../SearchButton/SearchButton';

const Selectors = () => {
  return (
    <div>
      <CameraSelector />
      <DateSelector />
      <SolSelector />
      <RoverSelector />
      <SearchButton />
    </div>
  );
};

export default Selectors;
