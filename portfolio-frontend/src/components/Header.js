import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Navbar.Brand>Israa Kadhim</Navbar.Brand>

        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
