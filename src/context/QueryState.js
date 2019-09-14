import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import QueryContext from './queryContext';
import queryReducer from './queryReducer';
import SET_CAM from './types';

const QueryState = props => {
  const { children } = props;

  const initialState = {
    cam: 'all'
  };
  const [state, dispatch] = useReducer(queryReducer, initialState);

  const setCam = input => {
    dispatch({
      type: SET_CAM,
      payload: input
    });
  };

  return (
    <QueryContext.Provider
      value={{
        cam: state.cam,
        setCam
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
