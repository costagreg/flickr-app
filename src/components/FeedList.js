import React, { Component } from "react";
import ReactDOM from "react-dom";
import Feed from "./FeedListItem";

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: false
    };
  }
  componentDidMount() {
    // Fetch JSONP data from Flickr public api
    const jsoncallback = "renderFeed";
    const script = document.createElement("script");
    script.src = `https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=${jsoncallback}`;
    script.onerror = () => {
      this.setState({
        error: true
      });
    };
    document.body.appendChild(script);
    window[jsoncallback] = ({ items }) => {
      this.setState({
        data: items,
        loading: false
      });
    };
  }
  render() {
    return this.state.data.map((item, index) => {
      return <Feed key={index} data={item} />;
    });
  }
}

export default FeedList;
