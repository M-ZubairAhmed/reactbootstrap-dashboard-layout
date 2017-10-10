import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col>{this.props.match.path}</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
