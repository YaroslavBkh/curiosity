import {
  SET_CAM,
  SET_DATE,
  SET_SOL,
  SET_ROVER,
  GET_MANIFEST,
  GET_PHOTOS
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_CAM:
      return {
        ...state,
        cam: action.payload
      };
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
        sol: null
      };
    case SET_SOL:
      return {
        ...state,
        sol: action.payload,
        date: null
      };
    case SET_ROVER:
      return {
        ...state,
        rover: action.payload
      };
    case GET_MANIFEST:
      return {
        ...state,
        manifest: {
          landing_date: action.payload.landing_date,
          launch_date: action.payload.launch_date,
          status: action.payload.status,
          max_sol: action.payload.max_sol,
          max_date: action.payload.max_date,
          total_photos: action.payload.total_photos
        }
      };
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
};
