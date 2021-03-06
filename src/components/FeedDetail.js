import React, { Component } from "react";
import ReactDOM from "react-dom";
import Moment from "react-moment";

class FeedDetail extends Component {
  render() {
    const { data } = this.props;
    const tags = data.tags.split(" ");
    const rawDescription = data.description.match(/<p>.*?<\/p>/g);
    const description = rawDescription.length >= 3 ? rawDescription[2] : "";
    const authorLink = `https://www.flickr.com/photos/${data.author_id}`;
    return (
      <article>
        <header>
          <h2>
            <a href={data.link} target="_blank">
              {data.title}
            </a>
          </h2>
          <div className="back-button">
            <a onClick={this.props.onClickBack}>Back</a>
          </div>
        </header>
        <div className="article-details">
          <a href={authorLink} target="_blank">
            Photo author
          </a>
          | Published:
          <Moment format="Do MMM YYYY [at] kk:mm">{data.date_taken}</Moment>
        </div>
        <div className="article-body">
          <div className="col-left">
            <a href={data.link} target="_blank">
              <img alt={data.title} src={data.media.m} />
            </a>
          </div>
          <div className="col-right">
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <div className="article-tags">
              Tags:
              <ul>
                {tags.map(tag => {
                  return (
                    <li key={tag}>
                      <a
                        href={`https://www.flickr.com/photos/tags/${tag}`}
                        target="_blank"
                      >
                        {tag}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default FeedDetail;
