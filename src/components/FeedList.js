import React, { Component } from "react";
import ReactDOM from "react-dom";
import Feed from "./FeedListItem";

class FeedList extends Component {

  render() {
    return this.props.data.map((item, index) => {
      return <Feed key={index} data={item} onClickItem={()=>{this.props.onClickItem(item)}} />;
    });
  }
}

export default FeedList;
