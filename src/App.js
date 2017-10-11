import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from './views/dashboard/Dashboard'
import NextPage from './views/nextPage/NextPage'
import MorePages from './views/morePage/MorePages'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel">
          <Header {...this.props} />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/nextPage" component={NextPage} />
            <Route path="/morePages" component={MorePages} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
