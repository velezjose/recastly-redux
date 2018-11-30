import React from 'react';

const VideoDetail = ({video}) => (
  !video
  ? <div></div>
  : <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div style={{maxHeight: 200 + 'px', overflow: 'auto'}}><pre>{video.snippet.description}</pre></div>
    </div>
);

export default VideoDetail;