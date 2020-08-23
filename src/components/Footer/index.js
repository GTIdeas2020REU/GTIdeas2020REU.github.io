import React from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import styled from 'styled-components';
import './footer.css'
import github from '../../assets/img/githubwhitetrans.png'
import covidforecasts from '../../assets/img/COVIDforecasts-logo-white-2.png'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const Styles = styled.div`
.navbar { background-color: #222; }
a, .navbar-nav, .navbar-light .nav-link {
  color: #9FFFCB;
  &:hover { color: white; }
}
.navbar-brand {
  font-size: 1.4em;
  color: #9FFFCB;
  &:hover { color: white; }
}
.form-center {
  position: absolute !important;
  left: 25%;
  right: 25%;
}
`;

export const Footer = () => (
  <div>
  <div className="row">
      <div className="col-md-12">
          <Router>
              <Navbar className="color-nav" variant="dark" expand="lg" sticky="bottom">
                  
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  
                  <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
               <a href='https://github.com/GTIdeas2020REU'><img src={github} style={{width: '50px', marginRight: '10px'}} alt='Github svg link'/></a>
                </Navbar.Text>{'   '}

                <Navbar.Text>
                <a href='https://www.covidforecasts.com'><img src={covidforecasts} style={{width: '50px'}} alt='COVIDforecasts site'/></a>
                </Navbar.Text>{' '}
            </Navbar.Collapse>
                  
              </Navbar>
              
              
          </Router>
      </div>
  </div>
</div>
)
