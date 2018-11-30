import React from 'react';
import { connect } from 'react-redux';

import VideoDetail from '../components/VideoDetail.js';

const VideoDetailContainer = (props) => (
  <VideoDetail video={props.video} />
);

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo && state.currentVideo.items[0]
  };
};

export default connect(mapStateToProps)(VideoDetailContainer);