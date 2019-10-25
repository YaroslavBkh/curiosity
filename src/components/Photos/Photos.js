import React, { useContext } from 'react';
import QueryContext from '../../context/query/queryContext';
import PhotoCard from './PhotoCard';
import styles from './Photos.module.css';

const Photos = () => {
  const queryContext = useContext(QueryContext);
  const { container } = styles;
  const { photos } = queryContext;

  return (
    <div className={container}>
      {photos &&
        photos.length > 0 &&
        photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      {photos && photos.length <= 0 && <h5>No match. Try another query</h5>}
    </div>
  );
};
export default Photos;
