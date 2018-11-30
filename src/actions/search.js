import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import { startChangeVideo } from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

const handleVideoSearch = (q) => {
  const options = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };

  return dispatch => {
    searchYouTube(options, (data) => {
      dispatch(startChangeVideo(data[0].id.videoId));
      dispatch(changeVideoList(data));
    });
  };
};

export default handleVideoSearch;