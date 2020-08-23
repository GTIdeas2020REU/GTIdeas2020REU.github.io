import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Jumbotron, Image, Button } from 'react-bootstrap';
import './Home.css';
/*
export const Home = (props) => (
  <header className="masthead">
  <div className="container">
    <div className="intro-text">
      <div className="intro-lead-in">We are Georgia Tech 2020 IDEAS REU.</div>
      {/*<div className="intro-heading text-uppercase">It's Nice To Meet You</div>}
      {/*<a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>}
    </div>
  </div>
  <Container> 
    <Row xs="2">
      <Col xs="6">Section 1</Col>
      <Col>Section 2</Col>
    </Row>
  </Container>
</header>
)
*/

const jumbotronstyle = {
  backgroundColor: 'black',
  width: 'auto',
  height: '300px',
  backgroundSize: 'cover'

}

export default class Home extends React.Component {
  render() {
    return (

<div>
      <Jumbotron style={jumbotronstyle}>
          <h2>We are COV-IDEAS REU 2020.</h2>
          <p style={{color: 'white'}} id='centerp'></p>
          <Link to="/about">
            <Button bsstyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>

      <Container fluid>
      
        <Row className="show-grid text-center">
          <Col xs={12} sm={8} className="person-wrapper">
            
            <h3>Program Overview</h3>
            <p className='biomaintext'> The COV-IDEAS REU was formed by various faculty across the country, joined together to mentor eight undergraduate students for a remote opportunity for summer research. Students work closely with faculty mentors on an original COVID-19 related research project, over a 10-week period. The two projects
            included in the program are the Aggregators and Model Projects. They gain experience in developing the project, collecting data, and analyzing the results.
            In addition to the additional projects, students attend weekly seminars with topics such as reading a scientific paper or workshops on different technologies.
              </p>
            <p className='biomaintext'> The topical focus of the projects are on forecasting, prediction markets, machine learning and mathematical modelling. Check out all of the work done for the projects <a href='https://github.com/GTIdeas2020REU'>here.</a> </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            
            <h3>GT IDEAS Lab</h3>
            <p className='biotext'>The Institute for Data Engineering and Science (IDEaS) provides a unified point to connect government, industry, and academia to advance foundational research, and accelerate the adoption of Big Data technology. 
            IDEaS leverages expertise and resources from throughout Georgia Tech's colleges, research labs, and external partners, to define and pursue grand challenges in data science foundations and in data-driven discovery. 
            </p>
            <div class="embed-responsive embed-responsive-16by9">
  
</div>
          </Col>
          
        </Row>
      </Container>
      </div>
    )
  }
}
