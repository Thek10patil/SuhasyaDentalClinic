import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LocationIcon from "./../../images/location_icon.png";
import appointmentIcon from "./../../images/appointment_icon.png";
import contactIcon from "./../../images/contact_icon.png";
import operantingHoursIcon from "./../../images/operanting_hours_icon.png";

export default function IconHeader() {
  return (
    <div style={{ marginBottom: "-100px" }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#E7E7E7" }}
      >
        <Container>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>{" "}
            <Nav>
              <Navbar.Brand href="#" style={{ width: "200px" }}></Navbar.Brand>
              <Navbar.Brand href="#">
                <img
                  src={appointmentIcon}
                  width="50px"
                  style={{
                    float: "left",
                    display: "inline-block",
                    margin: "5px",
                  }}
                ></img>
                <p
                  style={{
                    display: "inline-block",
                    padding: "12px",
                    fontSize: "12px",
                    top: "100%",
                    bottom: "25%",
                  }}
                >
                  Book Appointment
                  <br />
                  drkiranpatil89@gmail.com
                </p>
              </Navbar.Brand>
              <Navbar.Brand href="#">
                <img
                  src={contactIcon}
                  width="50px"
                  style={{
                    float: "left",
                    display: "inline-block",
                    margin: "5px",
                  }}
                ></img>
                <p
                  style={{
                    display: "inline-block",
                    padding: "12px",
                    fontSize: "12px",
                  }}
                >
                  +91 9923566259
                  <br />
                  Call Us Today!
                </p>
              </Navbar.Brand>
              <Navbar.Brand href="#">
                <img
                  src={operantingHoursIcon}
                  width="50px"
                  style={{
                    float: "left",
                    display: "inline-block",
                    margin: "5px",
                  }}
                ></img>
                <p
                  style={{
                    display: "inline-block",
                    padding: "12px",
                    fontSize: "12px",
                  }}
                >
                  Opening Hours
                  <br />
                  Monday-Saturday 10AM-10PM
                </p>
              </Navbar.Brand>
              <Navbar.Brand href="#">
                <img
                  src={LocationIcon}
                  width="50px"
                  style={{
                    float: "left",
                    display: "inline-block",
                    margin: "5px",
                  }}
                ></img>
                <p
                  style={{
                    display: "inline-block",
                    padding: "12px",
                    fontSize: "12px",
                  }}
                >
                  Thergaon, Pune
                  <br />
                  Maharashtra, India
                </p>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
