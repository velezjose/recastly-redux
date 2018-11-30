import React from 'react';
 
const Search = (props) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(e) => props.handleSearchInputChange(e.target.value) }
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
