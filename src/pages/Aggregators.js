import React, { Component } from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import './Aggregators.css';
import coronaheader from '../assets/img/coronabg.jpg'

const jumbotronstyle = {
  backgroundImage: {coronaheader},
  width: 'auto',
  height: '300px'

}

export default class Aggregators extends React.Component {
  render() {
    return (
      <div>
        {/*<Image src={coronaheader} className="header-image" />*/}
        <Jumbotron fluid style={{backgroundImage: `url(${coronaheader})`, backgroundSize: 'cover', width: 'auto',
  height: '300px' }}>
          <h2>COVID-19 Forecasting</h2>
          <p style={{color: 'white'}} id='centerp'>Aggregators Team</p>
        </Jumbotron>
        <Container>
          <h1>Aggregator Project</h1>
          <br></br>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p> The Aggregator project aims to show various past data readings of coronavirus data, as well as future predictions from various sources. 
                The data is aggregated and organized on a public website where users can examine different forecasts relating to the COVID-19 pandemic, and 
            make their own predictions about the future trajectory of factors relating to the pandemic such as daily deaths,
            hospitalizations and cases.
              </p>
              
              <p></p>
              <p></p>
              <p></p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <p>Portal to Forecasting site here.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}