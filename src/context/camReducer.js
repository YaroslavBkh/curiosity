import SET_CAM from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_CAM:
      return {
        ...state,
        cam: action.payload
      };
    default:
      return state;
  }
};
