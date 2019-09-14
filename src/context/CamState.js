import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import TestContext from './camContext';
import camReducer from './camReducer';
import SET_CAM from './types';

const CamState = props => {
  const { children } = props;

  const initialState = {
    cam: 'all'
  };
  const [state, dispatch] = useReducer(camReducer, initialState);

  const setCam = input => {
    dispatch({
      type: SET_CAM,
      payload: input
    });
  };

  return (
    <TestContext.Provider
      value={{
        cam: state.cam,
        setCam
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

CamState.propTypes = {
  children: PropTypes.node.isRequired
};

export default CamState;
