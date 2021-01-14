import React from 'react'
import logo from './images/h-logo-2.png';
import Homepage from './pages/Homepage';
import ali from "/Users/alihaidar/Projects/my-portfolio/src/images/ali.jpg"

import {Container, Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {}
  }
  
  render() {
    return (
      <Router>
      <Container fluid>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand className="navbar-brand" aria-setsize={45}> 
            <img src={logo} alt="logo" width={50} padding={100}/>
            Ali Haidar
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/"> Home </Link>
              <Link className="nav-link" to="/projects"> Projects </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Homepage />
        
        {/* <Footer /> */}
        
      </Container>
      </Router>
    );
  }
}

export default App;
