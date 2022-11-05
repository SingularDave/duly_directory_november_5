import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";

function NavbarCustom(props) {
  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <Link href="/" passHref={true}>
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
