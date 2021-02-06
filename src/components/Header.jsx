import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/Header.css"

function Header() {

  const [navbar, setNavbar] = useState(false);

  function changeBackground() {
    if(window.scrollY>=90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

    return <div><Navbar fixed="top" className={navbar? "navbar active" : "navbar"} collapseOnSelect expand="lg">
    <Navbar.Brand className={navbar? "navbar-brands active" : "navbar-brands"} href="#home">Havrock Solutions</Navbar.Brand>
    <Navbar.Toggle className="nav-toggle" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
      <div className="nav-items"><Nav className="mr-auto">
        <Nav.Link className={navbar? "nav-link active" : "nav-link"} href="#home">Home</Nav.Link>
        <Nav.Link className={navbar? "nav-link active" : "nav-link"} href="#about">About Us</Nav.Link>
        <Nav.Link className={navbar? "nav-link active" : "nav-link"} href="#what">What We Do?</Nav.Link>
        <Nav.Link className={navbar? "nav-link active" : "nav-link"} href="#contact">Contact Us</Nav.Link>
      </Nav></div>
    </Navbar.Collapse>
  </Navbar>
  </div>
}

export default Header;