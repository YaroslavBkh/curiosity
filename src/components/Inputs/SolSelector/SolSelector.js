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
      <div>
        <label htmlFor="sol">
          Sol
          <input
            type="number"
            id="sol"
            defaultValue="1"
            min="1"
            max={manifest.max_sol}
            placeholder="Sol"
            onInput={handleChange}
          />
        </label>
      </div>
    )
  );
};

export default DateSelector;
