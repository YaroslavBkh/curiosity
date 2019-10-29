import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const handleClick = () => setAlert(false);

  // Self-destruct in 3 seconds
  (() => {
    setTimeout(() => setAlert(false), 3000);
  })();

  return (
    <button type="button" onClick={handleClick}>
      Please enter a valid date to search by
    </button>
  );
};

export default Alert;
