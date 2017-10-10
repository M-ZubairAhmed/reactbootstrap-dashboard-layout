import React from 'react'
import { Navbar } from 'react-bootstrap'

import HeaderLinks from './HeaderLinks'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarExists: false,
    }
  }

  mobileSidebarToggle = event => {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true,
      })
    }
    event.preventDefault()
    document.documentElement.classList.toggle('nav-open')
    var node = document.createElement('div')
    node.id = 'bodyClick'
    node.onclick = function() {
      this.parentElement.removeChild(this)
      document.documentElement.classList.toggle('nav-open')
    }
    document.body.appendChild(node)
  }

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#pablo">
              {this.props.location.pathname.charAt(1).toUpperCase() +
                this.props.location.pathname.slice(2)}
            </a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse id="header_navbar">
          <HeaderLinks />
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
