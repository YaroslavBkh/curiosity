import React, { useContext } from 'react';
import QueryContext from '../../../context/queryContext';

const DateSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setDate, manifest } = queryContext;

  const handleChange = e => {
    setDate(e.target.value);
  };
  return (
    manifest && (
      <input
        type="date"
        defaultValue={manifest.landing_date}
        min={manifest.landing_date}
        max={manifest.max_date}
        onInput={handleChange}
      />
    )
  );
};

export default DateSelector;
