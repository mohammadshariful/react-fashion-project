import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menubar.css";
const Menubar = ({ logo, count }) => {
  return (
    <div className="text-white">
      <Navbar className="bg" expand="lg">
        <Container className="text-white">
          <Navbar.Brand href="#home">
            <img width="50" className="rounded-circle" src={logo} alt="logo" />
            <span className="ps-3">Fashion</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center align-items-center py-2">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/Cart" className="position-relative">
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {count}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
