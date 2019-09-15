import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT } from '../types';

const AlertState = props => {
  const { children } = props;

  const initialState = {
    alert: false
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = bool => {
    dispatch({
      type: SET_ALERT,
      payload: bool
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

AlertState.propTypes = {
  children: PropTypes.node.isRequired
};

export default AlertState;
