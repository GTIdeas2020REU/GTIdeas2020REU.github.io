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
              <h3 className='headerstyle'>Background</h3>
              <p> The Modeling project aims to evaluate the different types of forecasting models that have been used to predict the spread of COVID-19. 
                The team has surveyed and classified the different types of models (i.e. compartmental/differential equations, neural networks, Bayesian, ARIMA, etc.) and is developing a scoring mechanism to evaluate which pre-existing forecasts have most accurately represented the current state of the pandemic. Furthermore, the Modeling team is creating original implementations of these types of models to test on a standardized dataset for further analysis.
              </p>
              <h3 className='headerstyle'>Overview of the Effectiveness of COVID-19 Models</h3>
              <p>As the novel coronavirus SARS-CoV-2 continues to spread across the United States and around the world, governments and businesses are turning to pandemic forecasting models to inform their decisions on closing public spaces, enforcing quarantine measures, providing financial assistance, and more. Over the past several months, academics and private researchers have developed thousands of models to predict the trajectory. Unfortunately, many of the earlier models failed to predict the current trend of the pandemic, and amongst the newer models, there is significant disagreement as to what the future of COVID-19 will look like. Therefore, the goal of this project was to categorize and assess the effectiveness of this wide variety of models to determine how they compare to one another and how well they have done thus far in predicting new cases. Of the models we evaluated, most belonged to at least one of: compartmental (SIR-based) models, statistical models (ARIMA, ARGO, Bayesian), or deep learning/neural networks. Using data from the Johns Hopkins University Coronavirus database, Google Trends, Oxford, and Apple, we tested basic implementations of several models within these three categories. Ultimately, we developed and tested SIR, SIRD, SIRD with Dynamic R_t, Naïve Bayes, Bayesian Standard Time Series with MCMC, ARIMA, ARGONet and LSTM. In addition to our own models, we calculated a variety of error measurements for models developed by other researchers, as provided by the Center for Disease Control. In summation, due to the numerous factors contributing to the spread of the disease beyond government response and general epidemic dynamics, we determined that building a consistently dependable model that can make long-term forecasts can be impractical without having reasonable assumptions about the future values of these various parameters.</p>
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