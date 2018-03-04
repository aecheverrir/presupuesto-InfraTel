import React, { Component } from 'react';
import { Navbar, Nav, NavItem, } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './App.css';
import Material from './Material';
import ManoObra from "./ManoObra";
import Transporte from "./Transporte";
import HyE from "./HerramientaYEquipo";
//Experimento
import {HashRouter,Switch,Route,Link} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar inverse collapseOnSelect className="customNav">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/#">Presupuestos InfraTel</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={{ pathname: "/materiales", query: {} }}>
                  <NavItem eventKey={1}>Materiales</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Material />
        <ManoObra />
        <Transporte />
        <HyE />
      </div>
    );
  }
}

export default App;
