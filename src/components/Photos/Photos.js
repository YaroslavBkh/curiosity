import React, { useContext } from 'react';
import QueryContext from '../../context/query/queryContext';
import PhotoCard from './PhotoCard';

const Photos = () => {
  const queryContext = useContext(QueryContext);
  const { photos } = queryContext;

  // (() => {photos ? photos.map})();

  return (
    <div>
      {photos &&
        photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
    </div>
  );
};
export default Photos;
