import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from 'views/Dashboard/Dashboard'
import UserProfile from 'views/UserProfile/UserProfile'
import TableList from 'views/TableList/TableList'
import Typography from 'views/Typography/Typography'
import Icons from 'views/Icons/Icons'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'

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
            <Route path="/user" component={UserProfile} />
            <Route path="/table" component={TableList} />
            <Route path="/typography" component={Typography} />
            <Route path="/icons" component={Icons} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
