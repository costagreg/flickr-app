import React, { Component } from "react";
import ReactDOM from "react-dom";

class SearchInput extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search keywords"
          value={this.props.searchText}
          onChange={event => {
            this.props.onChange(event.target);
          }}
        />
      </form>
    );
  }
}

export default SearchInput;
