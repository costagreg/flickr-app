import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './style/default.scss'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

console.log('test')
ReactDOM.render(<App/>, document.querySelector('#app'))

module.hot.accept();