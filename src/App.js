import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePg';
import AboutPage from './pages/aboutPg';
import ContactPage from './pages/contactPg';
import TimelinePage from './pages/timelinePg';



//Portfolio Photo      \/
import logo from './portfolioPhoto.jpg';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Ryley Lamb",
      headerLinks: [
        {title: 'Home', path: '/'}, 
        {title: 'About', path: '/about'} , 
        {title: 'Contact', path: '/contact' },
        {title: 'Timeline', path: '/timeline'}
      ],
      home: {
        title: 'Welcome to my Page',
        subTitle: '',
        text: 'Check out my Github and contact page'
      },
      about: {
        
        title: 'This is me',
      },
      contact: {
        title: "Contact Information"
      },
      timeline: {
        title: "Event Log"
      }

    }
  }


  render() 
  {
    return (

      <Router>
        <Container className="p-0" fluid={true}>


          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Ryley Lamb</Navbar.Brand>
              
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/"> Home </Link>
                <Link className="nav-link" to="/about"> About </Link>
                <Link className="nav-link" to="/contact"> Contact </Link>
                <Link className="nav-link" to="/timeline"> Timeline </Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => 
              <HomePage title={this.state.home.title} 
                        subTitle={this.state.home.subTitle}
                        text={this.state.home.text} />}   />

          <Route path="/about" exact render={() => 
              <AboutPage title={this.state.about.title} 
                          subTitle={this.state.about.subTitle}
                          text={this.state.about.text}
                         />}   />

          <Route path="/contact" exact render={() => 
              <ContactPage title={this.state.contact.title} 
                          subTitle={this.state.contact.subTitle}
                          text={this.state.contact.text}
                         />}   />
          <Route path="/timeline" exact render={() => 
              <TimelinePage title={this.state.timeline.title} 
                          subTitle={this.state.timeline.subTitle}
                          text={this.state.timeline.text}
                         />}   />
          <Footer />

          
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
