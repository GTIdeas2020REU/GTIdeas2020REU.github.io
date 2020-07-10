import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

export const Home = (props) => (
  <header className="masthead">
  <div className="container">
    <div className="intro-text">
      <div className="intro-lead-in">We are Georgia Tech 2020 IDEAS REU.</div>
      {/*<div className="intro-heading text-uppercase">It's Nice To Meet You</div>*/}
      {/*<a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>*/}
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