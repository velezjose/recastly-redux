import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

const handleVideoSearch = (q) => {
  let url = 'https://www.googleapis.com/youtube/v3/search';
  url += `?key=${YOUTUBE_API_KEY}&q=${q}&part=snippet&maxResults=10`;
 
  return dispatch => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(changeVideo(data.items[0]));
        dispatch(changeVideoList(data.items));
      })
  };
};

export default handleVideoSearch;
