import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

const handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  const url = 'https://www.googleapis.com/youtube/v3/search';
 
  const options = {
    key: YOUTUBE_API_KEY,
    q: q,
    part: 'snippet',
    maxResults: 10
  };
  
  const callback = (data) => {
    console.log(data);
    // dispatch(changeVideo(data.items[0]));
    // dispatch(changeVideoList(data.items));
  };

  $.get(url, options, callback, 'json');

  return dispatch => {
    
  };
};

export default handleVideoSearch;
