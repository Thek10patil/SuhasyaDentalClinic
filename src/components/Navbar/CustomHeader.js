import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "./../../images/Testimonials_Logo.png";

export default function CustomHeader() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Container>
          <Navbar.Brand href="#">
            <img
              src={Logo}
              style={{
                // marginBottom: "-20px",
                zIndex: "1",
                width: "100px",
                position: "absolute",
                marginTop: "-25px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>{" "}
            <Nav>
              <Nav.Link href="#HOME">HOME</Nav.Link>
              {/* <Nav.Link eventKey={2} href="#dentalServices">
                DENTAL SERVICES
              </Nav.Link> */}
              <NavDropdown title="DENTAL SERVICES" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey={3} href="#aboutUs">
                ABOUT US
              </Nav.Link>
              <Nav.Link eventKey={4} href="#contactUs">
                CONTACT US
              </Nav.Link>
              <Nav.Link eventKey={5} href="#faq">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
