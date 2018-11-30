import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import VideoDetailContainer from '../containers/VideoDetailContainer.js';
import Nav from './Nav.js';

const App = () => (
  <div>
    <Nav />
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerContainer />
        <VideoDetailContainer />
      </div>
      <div className="col-md-5">
        <VideoListContainer />
      </div>
    </div>
  </div>
);

export default App;
