import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const SearchContainer = (props) => (
  <Search handleSearchInputChange={props.reduxFetch} />
);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
const mapDispatchToProps = (dispatch) => {
  return {
    reduxFetch: (q) => dispatch(handleSearchChange(q))
  };
};

export default connect(null, mapDispatchToProps)(SearchContainer);
