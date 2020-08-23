import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
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
            <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
            <Route path={process.env.PUBLIC_URL + '/aggregators'} component={Aggregators} />
            <Route path={process.env.PUBLIC_URL + '/modelgroup'} component={Model} />
            
          </Switch>
        </Router>
      </React.Fragment>

  
  

  <Footer/>

    </div>
  );
}

export default App;
