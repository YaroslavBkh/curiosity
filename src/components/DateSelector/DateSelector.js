import React, { useContext } from 'react';
import QueryContext from '../../context/queryContext';

const DateSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setCam } = queryContext;

  // const handleChange = e => {
  //   setCam(e.target.value);
  // };
  return <input type="date" />;
};

export default DateSelector;
