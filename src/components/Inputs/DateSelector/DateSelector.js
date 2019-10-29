import React, { useContext, useEffect, useRef } from 'react';
import QueryContext from '../../../context/query/queryContext';

const DateSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setDate, setParam, manifest } = queryContext;
  const dateInput = useRef(null);

  const initInput = () => {
    setDate(manifest.landing_date);
    dateInput.current.value = manifest.landing_date;
  };

  useEffect(() => {
    manifest && initInput();
    // eslint-disable-next-line
  }, [manifest]);

  const handleInput = e => {
    setDate(e.target.value);
    setParam(e.target.id);
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
            onInput={handleInput}
            ref={dateInput}
          />
        </label>
      </div>
    )
  );
};

export default DateSelector;
