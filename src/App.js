import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import logo from './portfolioPhoto.jpg';
import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Ryley Lamb",
      headerLinks: [
        {title: 'Home', path: '/'}, 
        {title: 'About', path: '/about'} , 
        {title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Grand Admiral',
        subTitle: 'Thrawn',
        text: 'Welcome'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: "Contact Information"
      }

    }
  }


  render() 
  {
    return (

      <Router>
        <Container className="p-0" fluid={true}>


          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand>Ryley Lamb</NavbarBrand>
              
            <NavbarToggle className="border-0" aria-controls="navbar-toggle"/>
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/"> Home </Link>
                <Link className="nav-link" to="/about"> About </Link>
                <Link className="nav-link" to="/contact"> Contact </Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>


        </Container>
      </Router>

      /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ryley Lamb
        </p>
        
      </header>
    </div>*/
    );
  } 
}

export default App;
