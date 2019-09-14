import React, { useContext } from 'react';
import CamContext from '../../context/camContext';

const DateSelector = () => {
  const camContext = useContext(CamContext);
  const { setCam } = camContext;

  // const handleChange = e => {
  //   setCam(e.target.value);
  // };
  return <input type="date" />;
};

export default DateSelector;
