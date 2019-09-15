import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QueryContext from './queryContext';
import queryReducer from './queryReducer';
import {
  SET_CAM,
  SET_DATE,
  SET_ROVER,
  GET_MANIFEST,
  GET_PHOTOS
} from './types';

const QueryState = props => {
  const { children } = props;

  const initialState = {
    cam: null,
    date: null,
    rover: 'Curiosity',
    manifest: null,
    photos: []
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
        state.date ? `earth_date=${state.date}&` : ''
      }${
        state.cam ? `camera= ${state.cam}&` : ''
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
        rover: state.rover,
        manifest: state.manifest,
        photos: state.photos,
        setCam,
        setDate,
        setRover,
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
