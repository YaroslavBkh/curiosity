import React, { useContext } from 'react';
import QueryContext from '../../context/queryContext';

const CameraSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setCam } = queryContext;

  const handleChange = e => {
    setCam(e.target.value);
  };
  return (
    <div>
      <select name="cameras" onChange={handleChange}>
        <option value="all">Any</option>
        <option value="FHAZ">Front Hazard Avoidance Camera/</option>
        <option value="NAVCAM">Navigation Camera</option>
        <option value="MAST">Mast Camera</option>
        <option value="CHEMCAM">Chemistry and Camera Complex</option>
        <option value="MAHLI">Mars Hand Lens Imager</option>
        <option value="MARDI">Mars Descent Imager/</option>
        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
      </select>
    </div>
  );
};

export default CameraSelector;
