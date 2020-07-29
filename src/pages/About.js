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
          <p style={{color: 'white'}} id='centerp'>*Tagline goes here*</p>
        </Jumbotron>
        <h1 style={{backgroundColor:'gray'}}>Faculty</h1>
        <br></br>


        <Container>
          <Col xs={12} sm={12} smOffset={2}>
            
            <h1 className='leftnamestyle'>Jacob Abernethy</h1>
            <h5 className='leftnamestyle'><i>Professor, X Project Lead</i></h5>
            <p className='leftnamestyle'>Jacob Abernethy is an Assistant Professor in Computer Science at Georgia Tech. He started his faculty career in the Department of Electrical Engineering and Computer Science at the University of Michigan. In October 2011 he finished a PhD in the Division of Computer Science at the University of California at Berkeley, and then spent nearly two years as a Simons postdoctoral fellow at the CIS department at UPenn. Abernethy's primary interest is in Machine Learning, with a particular focus in sequential decision making, online learning, online algorithms and adversarial learning models.
</p>
          </Col>
          <br></br><br></br>
          <Col xs={12} sm={12} smOffset={2}>
            
            <h1 className='leftnamestyle'>Bo Waggoner</h1>
            <h5 className='leftnamestyle'><i>Professor</i></h5>
            <p className='leftnamestyle'>Bo is Assistant Professor of Computer Science at the University of Colorado, Boulder. His research in theoretical computer science, economics, and machine learning specializes in information aggregation and forecasting.</p>
          </Col>
          <br></br><br></br>
          <Col xs={12} sm={12} smOffset={2}>
            
            <h1 className='leftnamestyle'>Frank The Tank</h1>
            <h5 className='leftnamestyle'><i>Professor</i></h5>
            <p className='leftnamestyle'>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out. These trees are so much fun. I get started on them and I have a hard time stopping. How to paint. That's easy. What to paint. That's much harder. Be brave. The man who does the best job is the one who is happy at his job.
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
            
            <h1 >Rachel Ombok</h1>
            <h5 ><i>BSc Computer Science, Minor in Game Engineering, Class of 2022</i></h5>
            <p className='textindent'>Rachel studies Computer Science and Game Engineering at New York University, class of 2022. 
              Alongside that, she is interested in game development, AR/VR technologies, and artificial intelligence. 
              Rachel works on the Aggregator Project where she helps build the COVID-19 forecasting site and aggregate relevant data relating to the pandemic.
</p>
            </Col>
            <Col>
            
            <h1 >Sarah Yoo</h1>
            <h5 ><i>Computer Science, Class of 2022</i></h5>
            <p className='textindent'>Sarah studies computer science with a concentration in people and intelligence at Georgia Tech. 
              She has a strong interest in web development, back-end development, and data science. 
              Sarah works on the Aggregator project where she helps build a website that aggregates COVID-19 forecasts and crowd-sources relevant predictions to provide a more accurate projection of the pandemic. 
 </p>
            </Col>
            <Col>
            
            <h1 >Aniruddha Murali</h1>
            <h5 ><i>Computer Science, Class of 2022</i></h5>
            <p className='textindent'>Aniruddha studies computer science, concentrating in artificial intelligence, modeling, and simulations at Georgia Tech. He is very interested in machine learning, data science, web development, and app development. Aniruddha works on the Aggregator Project where he helps build a website that aggregates COVID-19 forecasts and validates predictions relating to the spread of the pandemic to help provide a more accurate projection of the pandemic.
</p>
            
            </Col>
          </Row>
          <Row>

          <Col>
            
            <h1 >Roshan Pulapura</h1>
            <h5 ><i>Computer Science and Linguistics, Class of 2022</i></h5>
            <p className='textindent'>Roshan studies Computer Science and Linguistics at Harvard University. 
            He is interested in bridging the gap between formal logic-based mathematical linguistic theory and statistical NLP methods. 
            Roshan works on the Modeling Project, reproducing, analyzing, and comparing COVID-19 models to determine which models have been most successful in predicting the spread of the virus.

</p>
            </Col>

            <Col>
            
            <h1 >Frank D'Agostino</h1>
            <h5 ><i>Applied Mathematics & Computer Science, Class of 2023</i></h5>
            <p className='textindent'>Frank is planning to study Applied Mathematics with a secondary in Computer Science at Harvard University. 
            He has a strong interest in mathematical modeling and machine learning algorithms, along with emerging data science techniques. 
            Frank works on the Modeling Project where he builds existing COVID-19 epidemiological models and analyzes the strengths and weaknesses of each model design.

</p>
            </Col>

            <Col>
            
            <h1 >Yue (Amanda) Yao</h1>
            <h5 ><i>Honors Mathematics, Data Science, Minor in Economics, Class of 2021</i></h5>
            <p className='textindent'>Amanda studies Honors Mathematics and Data Science with a minor in Economics at University of Michigan.
             She is really interested in applying math to different fields such as financial engineering, computer vision, etc. with machine learning and data mining techniques. 
             Amanda works on the Modeling Project where she replicates and analyzes COVID-19 epidemiological models, and builds measurements to quantify model performance. 

</p>
            </Col>


          </Row>
          <Row>

            <Col>
            
            <h1 >Pulak Agarwal</h1>
            <h5 ><i>Computer Science, Class of 2022</i></h5>
            <p className='textindent'>Pulak is a Computer Science major at the Georgia Institute of Technology with concentrations in intelligence and modelling/simulation. 
            He is very passionate about utilising data for social good and loves playing around with datasets to explore various concepts. 
            Pulak is working with Dr. Prakash at Aditya Labs, assisting with the DeepCOVID forecasting model they are building to forecast COVID mortality.
 

</p>
            </Col>

            <Col >
            
            <h1 >Javen Ho</h1>
            <h5 ><i>Computer Engineering, Minor in Computer Science, Class of 2022</i></h5>
            <p className='textindent'>Javen is studying computer engineering at Georgia Institute of Technology while pursuing a computer science minor focused on intelligence. 
            His main focuses are in machine learning and data science; however, his passions include finance and entrepreneurship. 
            Javen is working with Dr. Prakash on the DeepCOVID forecasting model.
</p>
            </Col>

            <Col >
            
            <h1 ></h1>
            <h5 ><i></i></h5>
            <p className='textindent'>
</p>
            </Col>


          </Row>
        </Container>

      </div>
    )
  }
}