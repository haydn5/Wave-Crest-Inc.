import React from "react"

import { Container, Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import { Link } from 'gatsby'

import logo from "../images/wave-crest-logo-smaller.jpg"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
      <Container>
        <Navbar className="navbar  navbar-expand-md" id="mainNav" expand="xl"
                collapseOnSelect={true}>
          
            <Link className="navbar-brand">
              <img src={logo} alt={'The Wick'} className="imgFullCol" width="250" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="text-center ml-auto" >
              <ul className="navbar-nav">
                <li><Link to="/about" className="nav-link" activeClassName="active">About</Link></li>
            
                <li><Link to="/projects" className="nav-link" activeClassName="active">Projects</Link></li>
                <li><Link to="/testimonials" className="nav-link" activeClassName="active">Testimonials</Link></li>
                <li><Link to="/contact" className="nav-link" activeClassName="active">Contact Us</Link></li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
        </Container>
      </>
    );
  }
}
