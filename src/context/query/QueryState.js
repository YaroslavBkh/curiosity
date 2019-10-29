import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QueryContext from './queryContext';
import queryReducer from './queryReducer';
import {
  SET_CAM,
  SET_DATE,
  SET_SOL,
  SET_PARAM,
  SET_ROVER,
  GET_MANIFEST,
  GET_PHOTOS
} from '../types';

const QueryState = props => {
  const { children } = props;

  const initialState = {
    cam: null,
    date: null,
    sol: 0,
    rover: 'Curiosity',
    param: 'sol',
    manifest: null,
    photos: null
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

  const setSol = input => {
    dispatch({
      type: SET_SOL,
      payload: input
    });
  };

  const setRover = input => {
    dispatch({
      type: SET_ROVER,
      payload: input
    });
  };

  const setParam = param => {
    dispatch({
      type: SET_PARAM,
      payload: param
    });
  };

  const getManifest = async rover => {
    const res = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=WsCYjncMpMrMSOgnpMTXB33ATSzk0v2spwCccz4d`
    );
    dispatch({
      type: GET_MANIFEST,
      payload: res.data.photo_manifest
    });
  };

  const getPhotos = async () => {
    const res = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${state.rover}/photos?${
        state.param === 'date' ? `earth_date=${state.date}&` : ''
      }${state.param === 'sol' ? `sol=${state.sol}&` : ''}${
        state.cam !== null && state.cam !== '' ? `camera=${state.cam}&` : ''
      }api_key=WsCYjncMpMrMSOgnpMTXB33ATSzk0v2spwCccz4d`
    );

    dispatch({
      type: GET_PHOTOS,
      payload: res.data.photos
    });
  };

  return (
    <QueryContext.Provider
      value={{
        cam: state.cam,
        date: state.date,
        sol: state.sol,
        rover: state.rover,
        manifest: state.manifest,
        photos: state.photos,
        param: state.param,
        setCam,
        setDate,
        setSol,
        setRover,
        setParam,
        getManifest,
        getPhotos
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
