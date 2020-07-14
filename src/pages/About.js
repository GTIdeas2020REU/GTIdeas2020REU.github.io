import React from 'react';
import styled from 'styled-components';
import { Container, Col, Image, Jumbotron, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';
import person from '../assets/img/person-1.jpg'

//curr rel path = src/pages/person-1.jpg, ./person
// src/assets/img/person-1.jpg


const jumbotronstyle = {
  backgroundColor: 'black',
  width: 'auto',
  height: '300px',
  backgroundSize: 'cover'

}



export default class About extends React.Component {
  render() {
    return (
      <div>
        {/*<Image src={person} className="header-image" />*/}
        <Jumbotron fluid style={jumbotronstyle}>
          <h2>About Us</h2>
          <p style={{color: 'white'}}>*Tagline goes here*</p>
        </Jumbotron>
        <h1 style={{backgroundColor:'gray'}}>Faculty</h1>
        <br></br>


        <Container>
          <Col xs={12} sm={12} smOffset={2}>
            <Image src={person} className="about-profile-pic-left" />
            <h1 className='leftnamestyle'>Frank The Tank</h1>
            <h5 className='leftnamestyle'><i>Professor, X Project Lead</i></h5>
            <p className='leftbiostyle'>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out. These trees are so much fun. I get started on them and I have a hard time stopping. How to paint. That's easy. What to paint. That's much harder. Be brave. The man who does the best job is the one who is happy at his job.
            Anyone can paint. You can do anything here. So don't worry about it. Life is too short to be alone, too precious. Share it with a friend. Every highlight needs it's own personal shadow.<br></br><br></br>
            That's what makes life fun. That you can make these decisions. That you can create the world that you want. Of course he's a happy little stone, cause we don't have any other kind. It's so important to do something every day that will make you happy.
            You better get your coat out, this is going to be a cold painting. That's the way I look when I get home late; black and blue. That's crazy. We're trying to teach you a technique here and how to use it.</p>
          </Col>
          <br></br><br></br>
          <Col xs={12} sm={12} smOffset={2}>
            <Image src={person} className="about-profile-pic-right" />
            <h1 className='rightnamestyle'>Frank The Tank</h1>
            <h5 className='rightnamestyle'><i>Professor</i></h5>
            <p className='rightbiostyle'>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out. These trees are so much fun. I get started on them and I have a hard time stopping. How to paint. That's easy. What to paint. That's much harder. Be brave. The man who does the best job is the one who is happy at his job.
            Anyone can paint. You can do anything here. So don't worry about it. Life is too short to be alone, too precious. Share it with a friend. Every highlight needs it's own personal shadow.<br></br><br></br>
            That's what makes life fun. That you can make these decisions. That you can create the world that you want. Of course he's a happy little stone, cause we don't have any other kind. It's so important to do something every day that will make you happy.
            You better get your coat out, this is going to be a cold painting. That's the way I look when I get home late; black and blue. That's crazy. We're trying to teach you a technique here and how to use it.</p>
          </Col>
          <br></br><br></br>
          <Col xs={12} sm={12} smOffset={2}>
            <Image src={person} className="about-profile-pic-left" />
            <h1 className='leftnamestyle'>Frank The Tank</h1>
            <h5 className='leftnamestyle'><i>Professor</i></h5>
            <p className='leftbiostyle'>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out. These trees are so much fun. I get started on them and I have a hard time stopping. How to paint. That's easy. What to paint. That's much harder. Be brave. The man who does the best job is the one who is happy at his job.
            Anyone can paint. You can do anything here. So don't worry about it. Life is too short to be alone, too precious. Share it with a friend. Every highlight needs it's own personal shadow.<br></br><br></br>
            That's what makes life fun. That you can make these decisions. That you can create the world that you want. Of course he's a happy little stone, cause we don't have any other kind. It's so important to do something every day that will make you happy.
            You better get your coat out, this is going to be a cold painting. That's the way I look when I get home late; black and blue. That's crazy. We're trying to teach you a technique here and how to use it.</p>
          </Col>
        </Container>
        <br></br><br></br>


        <h1 style={{backgroundColor:'gray'}}>Students</h1>
        <br></br>
        <Container>
          <Row>
            <Col>
            <Image src={person} className="about-profile-pic-left" />
            <h1 >Frank The Tank</h1>
            <h5 ><i>Student, X Team</i></h5>
            <p >That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out. These trees are so much fun. I get started on them and I have a hard time stopping. How to paint. That's easy. What to paint. That's much harder. Be brave. The man who does the best job is the one who is happy at his job.
            Anyone can paint.</p>
            </Col>
            <Col>
            <Image src={person} className="about-profile-pic-left" />
            <h1 >Frank The Tank</h1>
            <h5 ><i>Student, X Team</i></h5>
            <p >That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out. These trees are so much fun. I get started on them and I have a hard time stopping. How to paint. That's easy. What to paint. That's much harder. Be brave. The man who does the best job is the one who is happy at his job.
            Anyone can paint. </p>
            </Col>
            <Col>
            <Image src={person} className="about-profile-pic-left" />
            <h1 >Frank The Tank</h1>
            <h5 ><i>Student, X Team</i></h5>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out. These trees are so much fun. I get started on them and I have a hard time stopping. How to paint. That's easy. What to paint. That's much harder. Be brave. The man who does the best job is the one who is happy at his job.
            Anyone can paint. </p>
            
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}