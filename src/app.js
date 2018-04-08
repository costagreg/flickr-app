import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import FeedList from './components/FeedList'

import './style/default.scss'

class App extends Component {
  render() {
    return (
        <section className='feed-list'>
          <FeedList/>
        </section>
    )
  }
}

console.log('test')
ReactDOM.render(<App/>, document.querySelector('#app'))

module.hot.accept();