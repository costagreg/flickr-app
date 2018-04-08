import React, { Component } from "react";
import ReactDOM from "react-dom";
import FeedList from "./components/FeedList";
import FeedDetail from "./components/FeedDetail";
import SearchInput from "./components/SearchInput";

import "./style/default.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: false,
      currentItem: null,
      searchText: ""
    };
    this.onClickBack = this.onClickBack.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
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
  onChangeSearch(text) {
    this.setState({ searchText: text.value });
  }
  render() {
    console.log('yeah')
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
      const items = this.state.data.filter((item)=>{
        return this.state.searchText === '' || item.tags.indexOf(this.state.searchText) >= 0 
      })
      return (
        <section>
          <section className="search">
            <SearchInput onChange={this.onChangeSearch} searchText={this.state.searchText}/>
          </section>
          <section className="feed-list">
            <FeedList data={items} onClickItem={this.onClickItem} />
          </section>
        </section>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
