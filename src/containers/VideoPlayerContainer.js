import React from 'react';
import { connect } from 'react-redux';

import VideoPlayer from '../components/VideoPlayer.js';

const VideoPlayerContainer = (props) => (
  <VideoPlayer video={props.video} />
);

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo && state.currentVideo.items[0]
  };
};

export default connect(mapStateToProps)(VideoPlayerContainer);
