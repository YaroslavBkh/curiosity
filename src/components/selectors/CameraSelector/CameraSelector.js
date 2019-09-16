import React, { useContext } from 'react';
import QueryContext from '../../../context/query/queryContext';

const CameraSelector = () => {
  const queryContext = useContext(QueryContext);
  const { setCam, rover } = queryContext;

  const handleChange = e => {
    setCam(e.target.value);
  };

  return (
    // Display cameras by actual presence on rovers
    <div>
      <select name="cameras" onChange={handleChange}>
        <option value="">Camera: any</option>
        <option value="FHAZ">Front Hazard Avoidance Camera</option>
        <option value="NAVCAM">Navigation Camera</option>
        {rover === 'Curiosity' && (
          <>
            <option value="MAST">Mast Camera</option>
            <option value="CHEMCAM">Chemistry and Camera Complex</option>
            <option value="MAHLI">Mars Hand Lens Imager</option>
            <option value="MARDI">Mars Descent Imager</option>
          </>
        )}
        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
        {rover !== 'Curiosity' && (
          <>
            <option value="MINITES">
              Miniature Thermal Emission Spectrometer
            </option>
            <option value="PANCAM">Panoramic Camera</option>
          </>
        )}
      </select>
    </div>
  );
};

export default CameraSelector;
