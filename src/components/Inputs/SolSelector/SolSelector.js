import React, { useContext } from 'react';
import QueryContext from '../../../context/query/queryContext';

const DateSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setSol, setParam, manifest } = queryContext;

  const handleInput = e => {
    setSol(e.target.value);
    setParam(e.target.id);
  };

  return (
    manifest && (
      <div>
        <label htmlFor="sol">
          Sol
          <input
            type="number"
            id="sol"
            min="0"
            placeholder="0"
            max={manifest.max_sol}
            onInput={handleInput}
          />
        </label>
      </div>
    )
  );
};

export default DateSelector;
