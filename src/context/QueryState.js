import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import QueryContext from './queryContext';
import queryReducer from './queryReducer';
import { SET_CAM, SET_DATE, SET_ROVER } from './types';

const QueryState = props => {
  const { children } = props;

  const initialState = {
    cam: 'all',
    date: null,
    rover: 'Curiosity'
  };
  const [state, dispatch] = useReducer(queryReducer, initialState);

  const setCam = input => {
    dispatch({
      type: SET_CAM,
      payload: input
    });
  };

  const setDate = input => {
    dispatch({
      type: SET_DATE,
      payload: input
    });
  };

  const setRover = input => {
    dispatch({
      type: SET_ROVER,
      payload: input
    });
  };

  return (
    <QueryContext.Provider
      value={{
        cam: state.cam,
        date: state.date,
        rover: state.rover,
        setCam,
        setDate,
        setRover
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

QueryState.propTypes = {
  children: PropTypes.node.isRequired
};

export default QueryState;
