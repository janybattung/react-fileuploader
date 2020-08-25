import React, { Component } from 'react';
// import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/> 
        <input 
        placeholder="Search term" 
        value={this.props.searchTerm}
        onChange={e => this.props.handleUpdate(e.target.value)}/>
      </div>   
    );
  }
}
//React component from a third party library used to display SVG icons from the popular Font Awesome Icon Collection. 
export default SearchBox;