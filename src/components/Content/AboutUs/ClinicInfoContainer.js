import React from "react";
import Doctors from "./../../../images/doctors.png";
import { Container, Row, Col } from "react-grid-system";

export default function ClinicInfoContainer() {
  return (
    <div style={{ backgroundColor: "#F2F2F2" }}>
      <Container style={{ padding: "50px" }}>
        <Row>
          <Col sm={6}>
            <img
              className="img-fluid"
              src={Doctors}
              style={{ float: "right" }}
            />
          </Col>

          <Col sm={6}>
            <div
              style={{
                margin: "10% 10% 0 10%",
              }}
            >
              <p
                className="text-left text-capitalize"
                style={{ color: "#008A8F" }}
              >
                WELCOME TO SUHASYA DENTAL CLINIC
              </p>
              <p
                className="text-left text-uppercase"
                style={{ fontSize: "25px" }}
              >
                We Create Beautiful Smiles
              </p>
              <p className="text-left font-weight-light">
                Sushasya Dental clinic is a modern dental clinic, specialized in
                advanced diagnostics and treatment of dental and oral disorders.
                <br />
                We offer comprehensive services from all fields of dentistry. In
                addition to high-end dental equipment, all services are provided
                in a comfortable, luxury environment. New patients are welcomed
                with a complimentary oral helth consultation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
