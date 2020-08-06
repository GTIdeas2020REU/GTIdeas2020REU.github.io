import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Model  from './pages/Model';
import Aggregators from './pages/Aggregators';
import { NavbarBrand } from 'react-bootstrap';
import createHistory from 'history/createBrowserHistory';
// src/assets/img/person-1.jpg
function App() {

  return (
    <div className="App">
      <React.Fragment>

        <Router  basename={process.env.PUBLIC_URL}>
        <NavigationBar className="justify-content-end"/>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route path={process.env.PUBLIC_URL + "/about"} to='/about' component={About} />
            <Route path={process.env.PUBLIC_URL + '/aggregators'} to='/aggregators' component={Aggregators} />
            <Route path={process.env.PUBLIC_URL + '/modelgroup'} component={Model} />
            
          </Switch>
        </Router>
      </React.Fragment>

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted"></h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

    </div>
  );
}

export default App;
