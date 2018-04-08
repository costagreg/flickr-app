import React, { Component } from "react";
import ReactDOM from "react-dom";

class FeedDetail extends Component {
  render() {
    const {data} = this.props
    return (
      <article>
        <h2>{data.title}</h2>
        <a>Photo author</a> | Published: {data.date_taken}
        <a onClick={this.props.onClickBack}>Back</a>
        <div className="col-left">
            <img alt={data.title} src={data.media.m} />
        </div>
        <div className="col-right">
          <p>{data.description}</p>
          Tags:{data.tags}
        </div>
      </article>
    );
  }
}

export default FeedDetail;
