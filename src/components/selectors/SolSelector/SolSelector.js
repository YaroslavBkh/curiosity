import React, { useContext } from 'react';
import QueryContext from '../../../context/query/queryContext';

const DateSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setSol, manifest } = queryContext;

  const handleChange = e => {
    setSol(e.target.value);
  };
  return (
    manifest && (
      <input
        type="number"
        placeholder="Choose Martian Sol"
        onInput={handleChange}
      />
    )
  );
};

export default DateSelector;
