import React, { useContext } from 'react';
import QueryContext from '../../context/query/queryContext';

const SearchButton = () => {
  const queryContext = useContext(QueryContext);
  const { getPhotos } = queryContext;

  const onClick = () => getPhotos();
  return (
    <button type="button" onClick={onClick}>
      Search
    </button>
  );
};

export default SearchButton;
