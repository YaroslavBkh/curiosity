import React, { useContext } from 'react';
import QueryContext from '../../../context/query/queryContext';

const DateSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setDate, manifest } = queryContext;

  const handleChange = e => {
    setDate(e.target.value);
  };
  return (
    manifest && (
      <div>
        <label htmlFor="date">
          Earth date
          <input
            id="date"
            type="date"
            min={manifest.landing_date}
            max={manifest.max_date}
            onInput={handleChange}
          />
        </label>
      </div>
    )
  );
};

export default DateSelector;
