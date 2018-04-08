import React, { Component } from "react";
import ReactDOM from "react-dom";
import Moment from "react-moment";

class FeedListItem extends Component {
  render() {
    const { data } = this.props;
    const authorLink = `https://www.flickr.com/photos/${data.author_id}`;
    return (
      <article>
        <div className="col-left">
          <a onClick={this.props.onClickItem}>
            <img alt={data.title} src={data.media.m} />
          </a>
        </div>
        <div className="col-right">
          <h3>
            <a onClick={this.props.onClickItem}>{data.title}</a>
          </h3>
          <ul>
            <li className="post-author">
              <a
                href={`https://www.flickr.com/photos/${data.author_id}`}
                target="_blank"
              >
                Post author
              </a>
            </li>
            <li className="date">
              Published on{" "}
              <Moment format="Do MMM YYYY [at] kk:mm">{data.date_taken}</Moment>
            </li>
            <li className="view-flicker">
              <a href={data.link} target="_blank">
                View on Flickr
              </a>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}

export default FeedListItem;
