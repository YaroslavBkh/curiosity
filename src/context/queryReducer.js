import { SET_CAM, SET_DATE, SET_ROVER } from './types';

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
        date: action.payload
      };
    case SET_ROVER:
      return {
        ...state,
        rover: action.payload
      };
    default:
      return state;
  }
};
