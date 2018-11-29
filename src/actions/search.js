import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

const handleVideoSearch = (q) => {
  const options = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };

  return dispatch => {
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(changeVideo(data.items[0]));
    //     dispatch(changeVideoList(data.items));
    //   })
    searchYouTube(options, (data) => {
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
    });
  };
};

// var searchYouTube = ({key, query, max = 5}, callback) => {

export default handleVideoSearch;
