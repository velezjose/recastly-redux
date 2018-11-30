import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const VideoListContainer = (props) => (
    <VideoList videos={props.videos} handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick}/>
);


//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
