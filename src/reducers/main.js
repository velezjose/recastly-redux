import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

//TODO: define the root reducer for this app
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default combineReducers({
  rootReducer,
  currentVideoReducer,
  videoListReducer
});
