import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

const initialState = {
  video: exampleVideoData[0]
};

var currentVideoReducer = (state = initialState, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return {
      video: action.payload
    };
  }
  return state;
};

export default currentVideoReducer;
