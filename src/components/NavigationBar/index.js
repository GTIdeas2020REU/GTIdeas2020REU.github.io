import React from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import styled from 'styled-components';
import './navbar.css';
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

export const NavigationBar = () => (
  <div>
  <div className="row">
      <div className="col-md-12">
          <Router>
              <Navbar className="color-nav" variant="dark" expand="lg" sticky="top">
                  <Navbar.Brand href="/">COV-IDEAS REU 2020</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/about">About</Nav.Link>
                      <NavDropdown alignRight='true' title="Projects" id="dropdown-menu-align-right">
                      <NavDropdown.Item href="/aggregators">Aggregators </NavDropdown.Item>
                      <NavDropdown.Item href="/ml">ML</NavDropdown.Item>
                      </NavDropdown>

                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
              
              
          </Router>
      </div>
  </div>
</div>
)



/*
class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
	<div className="container">
		<a className="navbar-brand js-scroll-trigger" href="#page-top">GT IDEAS 2020 REU</a>
		<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			Menu
			<i className="fa fa-bars"></i>
		</button>
		<div className="collapse navbar-collapse" id="navbarResponsive">
			<ul className="navbar-nav text-uppercase ml-auto">
				<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
				</li> 
				<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#faculty">Faculty</a>
				</li>
				<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#students">Students</a>
				</li>
				<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#about">About</a>
				</li>
				<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
    );
  }
}

export default NavigationBar;
*/
/*
class Navbar extends React.Component {
  render() {
    return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <a className="navbar-brand" href="#">Navbar</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav">
         <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
         <a className="nav-item nav-link" href="#">About</a>
       </div>
       </div>
     </nav>
    );
  }
}

export default Navbar;

*/