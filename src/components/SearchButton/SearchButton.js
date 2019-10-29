import React, { useContext } from 'react';
import Alert from '../Alert/Alert';
import QueryContext from '../../context/query/queryContext';
import AlertContext from '../../context/alert/alertContext';

const SearchButton = () => {
  const queryContext = useContext(QueryContext);
  const { getPhotos, sol, date, param } = queryContext;
  const alertContext = useContext(AlertContext);
  const { alert, setAlert } = alertContext;

  const onClick = () =>
    (sol === null && date === null) || date === ''
      ? setAlert(true)
      : getPhotos();

  return (
    <>
      <button type="button" onClick={onClick}>
        {param ? `Search by ${param}` : `Search`}
      </button>
      {alert && <Alert />}
    </>
  );
};

export default SearchButton;
