import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData';

const initialState = {
  videos: exampleVideoData
};

const videoListReducer = (state = initialState, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return {
        videos: action.videos
      };
    default:
      return state;
  }
};

export default videoListReducer;
