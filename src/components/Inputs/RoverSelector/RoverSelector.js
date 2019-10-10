import React, { useContext } from 'react';
import QueryContext from '../../../context/query/queryContext';

const RoverSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setRover } = queryContext;

  const handleChange = e => {
    setRover(e.target.value);
  };
  return (
    <div>
      <label htmlFor="rover">
        Rover
        <select name="rover" id="rover" onChange={handleChange}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirit</option>
        </select>
      </label>
    </div>
  );
};

export default RoverSelector;
