import React, { Component } from 'react';
import { Navbar, Nav, NavItem, } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './App.css';
import Material from './Material';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar inverse collapseOnSelect className="customNav">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/#">Mern Stack Todo App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={{ pathname: "/", query: {} }}>
                  <NavItem eventKey={1}>Home</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Material />
      </div>
    );
  }
}

export default App;
