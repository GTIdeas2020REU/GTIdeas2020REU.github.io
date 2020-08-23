import React, { Component } from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import './Aggregators.css';
import coronaheader from '../assets/img/coronabg.jpg'
import graphpic from '../assets/img/webpic.jpg'
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
              <h3 className='headertext'>Overview</h3>
              <p> The Aggregator project aims to show various past data readings of coronavirus data, as well as future predictions from various sources. 
                The data is aggregated and organized on a public website where users can examine different forecasts relating to the COVID-19 pandemic, and 
            make their own predictions about the future trajectory of factors relating to the pandemic such as daily deaths,
            hospitalizations and cases. The data is showcased on <a href='https://www.covidforecasts.com'>COVIDforecasts.</a>
              </p>
              
              <p>COVIDforecasts was created for you to compare official COVID forecasts and contribute your own. 
                Currently we compare forecasts for U.S. daily deaths, and we hope to expand to more forecasts in the future.</p>
              <p></p>
              <p></p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <h3>Team</h3>
              <p>The Aggregators Project was led by professors Jacob Abernethy and Bo Waggoner, with special contributions from Raf Frongillo.
                The students on the team included Gayeon (Sarah) Yoo, Aniruddha Murali, and Rachel Ombok.
              </p>
              <p><a href='https://www.covidforecasts.com'>COVIDforecasts</a></p>
              <img src={graphpic} width={400}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}