import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import HeaderLinks from '../Header/HeaderLinks'
import logo from '../../assets/img/logo.png'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
    }
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : ''
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  render() {
    const sidebarBackground = {
      // backgroundImage: 'url(' + imagine + ')',
    }
    return (
      <div id="sidebar" className="sidebar" data-color="blue" data-image={''}>
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://mastermindapps.com"
            className="simple-text logo-normal"
          >
            RBs DLayout
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            <li className={this.activeRoute('/dashboard')}>
              <NavLink
                to={'/dashboard'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-tachometer" aria-hidden="true" />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className={this.activeRoute('/analytics')}>
              <NavLink
                to={'/analytics'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-line-chart" aria-hidden="true" />
                <p>Analytics</p>
              </NavLink>
            </li>
            <li className={this.activeRoute('/records')}>
              <NavLink
                to={'/records'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-th-list" aria-hidden="true" />
                <p>Records</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
