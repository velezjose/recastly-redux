import { searchSingleVideo } from '../lib/searchYouTube.js';

const changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video: video
});

export const startChangeVideo = (videoId) => {
  return (dispatch) => {
    searchSingleVideo(videoId, (data) => dispatch(changeVideo(data)));
  };
};

export default changeVideo;
