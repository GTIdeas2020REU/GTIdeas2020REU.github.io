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
          <h2>We are Georgia Tech 2020 IDEAS REU.</h2>
          <p style={{color: 'white'}} id='centerp'>*Tagline goes here*</p>
          <Link to="/about">
            <Button bsstyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>

      <Container fluid>
      
        <Row className="show-grid text-center">
          <Col xs={12} sm={8} className="person-wrapper">
            
            <h3>Program Overview</h3>
            <p className='biotext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut ali quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p className='biotext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            
            <h3>GT IDEAS Lab</h3>
            <p className='biotext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/" allowfullscreen></iframe>
</div>
          </Col>
          
        </Row>
      </Container>
      </div>
    )
  }
}
