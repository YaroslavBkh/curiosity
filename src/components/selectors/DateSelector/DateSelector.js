import React, { useContext } from 'react';
import QueryContext from '../../../context/queryContext';

const DateSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setDate } = queryContext;

  const handleChange = e => {
    setDate(e.target.value);
  };
  return <input type="date" onInput={handleChange} />;
};

export default DateSelector;
