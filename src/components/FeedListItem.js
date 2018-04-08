import React, { Component } from "react";
import ReactDOM from "react-dom";

class FeedListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <article>
        <div className="col-left">
          <img alt={data.title} src={data.media.m} />
        </div>
        <div className="col-right">
          <h3>{data.title}</h3>
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
