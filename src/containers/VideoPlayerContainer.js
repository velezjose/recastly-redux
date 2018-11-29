import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const VideoPlayerContainer = (props) => (
    <VideoPlayer video={props.currentVideo} />
);

// video={this.state.currentVideo}

const mapStateToProps = (state) => {
  return {
    currentVideo: state.currentVideoReducer.video
  };
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps)(VideoPlayerContainer);
