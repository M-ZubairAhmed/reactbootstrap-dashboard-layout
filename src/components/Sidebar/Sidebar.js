import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import HeaderLinks from '../Header/HeaderLinks.jsx'
import logo from 'assets/img/logo.png'

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

  updateDimensions() {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }
  render() {
    const sidebarBackground = {
      // backgroundImage: 'url(' + imagine + ')',
    }
    return (
      <div id="sidebar" className="sidebar" data-color="blue" data-image={''}>
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a
            href="https://www.creative-tim.com"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com"
            className="simple-text logo-normal"
          >
            Company Name
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
                <i className="pe-7s-graph" />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className={this.activeRoute('/user')}>
              <NavLink
                to={'/user'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="pe-7s-user" />
                <p>User Profile</p>
              </NavLink>
            </li>
            <li className={this.activeRoute('/table')}>
              <NavLink
                to={'/table'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="pe-7s-note2" />
                <p>Table List</p>
              </NavLink>
            </li>
            <li className={this.activeRoute('/typography')}>
              <NavLink
                to={'/typography'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="pe-7s-news-paper" />
                <p>Typography</p>
              </NavLink>
            </li>
            <li className={this.activeRoute('/icons')}>
              <NavLink
                to={'/icons'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="pe-7s-science" />
                <p>Icons</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
