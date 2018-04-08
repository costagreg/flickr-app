import React, { Component } from "react";
import ReactDOM from "react-dom";
import FeedList from "./components/FeedList";
import FeedDetail from "./components/FeedDetail";

import "./style/default.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: false,
      currentItem: null
    };

    this.onClickBack = this.onClickBack.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
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
  onClickItem(item) {
    this.setState({
      currentItem: item
    });
  }
  onClickBack() {
    this.setState({
      currentItem: null
    });
  }
  render() {
    if (this.state.currentItem) {
      return (
        <section className="feed-detail">
          <FeedDetail
            data={this.state.currentItem}
            onClickBack={this.onClickBack}
          />
        </section>
      );
    } else {
      return (
        <section className="feed-list">
          <FeedList data={this.state.data} onClickItem={this.onClickItem} />
        </section>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
