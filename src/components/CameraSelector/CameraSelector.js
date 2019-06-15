import React from 'react';
const CameraSelector = ({ onChange }) => {
  return (
    <div>
      <select name="cameras" onChange={onChange}>
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
  )
}

export default CameraSelector;

