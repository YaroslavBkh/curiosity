import React, { useContext } from 'react';
import QueryContext from '../../context/query/queryContext';
import PhotoCard from './PhotoCard';

const Photos = () => {
  const queryContext = useContext(QueryContext);
  const { photos } = queryContext;

  return (
    <div>
      {photos &&
        photos.length > 0 &&
        photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      {photos && photos.length <= 0 && <h5>No match. Try another query</h5>}
    </div>
  );
};
export default Photos;
