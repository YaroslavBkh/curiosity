import React, { useContext } from 'react';
import Alert from '../Alert/Alert';
import QueryContext from '../../context/query/queryContext';
import AlertContext from '../../context/alert/alertContext';

const SearchButton = () => {
  const queryContext = useContext(QueryContext);
  const { getPhotos, sol, date } = queryContext;
  const alertContext = useContext(AlertContext);
  const { alert, setAlert } = alertContext;

  const onClick = () =>
    sol === null && date === null ? setAlert(true) : getPhotos();

  return (
    <>
      <button type="button" onClick={onClick}>
        Search
      </button>
      {alert && <Alert />}
    </>
  );
};

export default SearchButton;
