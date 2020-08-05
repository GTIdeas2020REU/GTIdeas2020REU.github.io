import React from 'react';
import styled from 'styled-components';
import './Model.css';
import modelheader from '../assets/img/modelbg.png'
import { Container, Col, Image, Jumbotron, Button, Row } from 'react-bootstrap';

export default class Model extends React.Component{
  render(){
    return(
      <div>
        {/*<Image src={coronaheader} className="header-image" />*/}
        <Jumbotron fluid style={{backgroundImage: `url(${modelheader})`, backgroundSize: 'cover', width: 'auto',
  height: '300px' }}>
          <h2>COVID-19 Modelling</h2>
          <p style={{color: 'white'}} id='centerp'>Modelling Team</p>
        </Jumbotron>
        <Container>
          <h1>Model Project</h1>
          <br></br>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p> The Modeling project aims to evaluate the different types of forecasting models that have been used to predict the spread of COVID-19. 
                The team has surveyed and classified the different types of models (i.e. compartmental/differential equations, neural networks, Bayesian, ARIMA, etc.) and is developing a scoring mechanism to evaluate which pre-existing forecasts have most accurately represented the current state of the pandemic. Furthermore, the Modeling team is creating original implementations of these types of models to test on a standardized dataset for further analysis.

              </p>
              
              <p></p>
              <p></p>
              <p></p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <p>Graph example</p>
            </Col>
          </Row>
        </Container>
      </div>

    )
  }
}