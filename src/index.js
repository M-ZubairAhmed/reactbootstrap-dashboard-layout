import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" name="Home" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)
