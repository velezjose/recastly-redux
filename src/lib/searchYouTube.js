import YOUTUBE_API_KEY from '../config/youtube.js';

const searchYouTube = ({key, query, max = 5}, callback) => {
  // $.get('https://www.googleapis.com/youtube/v3/search', {
  //   part: 'snippet',
  //   key: key,
  //   q: query,
  //   maxResults: max,
  //   type: 'video',
  //   videoEmbeddable: 'true'
  // })
  //   .done(({items}) => {
  //     if (callback) {
  //       callback(items);
  //     }
  //   })
  //   .fail(({responseJSON}) => {
  //     responseJSON.error.errors.forEach((err) =>
  //       console.error(err)
  //     );
  //   });

  let url = 'https://www.googleapis.com/youtube/v3/search';
  url += `?key=${key}&q=${query}&maxResults=${max}&part=snippet&type=video&videoEmbeddable=true`;

  fetch(url)
    .then((response) => response.json())
    .then(({ items }) => callback(items))
    .catch(e => console.log(e));
};

export const searchSingleVideo = (id, callback) => {
  let url = 'https://www.googleapis.com/youtube/v3/videos';
  url += `?key=${YOUTUBE_API_KEY}&id=${id}&part=snippet,contentDetails,statistics`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
      
    })
    .catch(e => console.log(e));
};

export default searchYouTube;
