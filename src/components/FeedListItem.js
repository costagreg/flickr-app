import React, { Component } from "react";
import ReactDOM from "react-dom";

class FeedListItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <article>
        <div className="col-left">
          <a onClick={this.props.onClickItem}><img alt={data.title} src={data.media.m} /></a>
        </div>
        <div className="col-right">
          <h3><a onClick={this.props.onClickItem}>{data.title}</a></h3>
          <ul>
            <li className="post-author">Post author</li>
            <li className="date">Published on {data.date_taken}</li>
            <li className="view-flicker">View on Flickr</li>
          </ul>
        </div>
      </article>
    );
  }
}

export default FeedListItem;
