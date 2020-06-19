import React from "react";
import Doctors from "./../../../images/doctors.png";
import { Container, Row, Col } from "react-grid-system";

export default function DoctorInfoContainer() {
  return (
    <div>
      <p
        className="text-center text-uppercase"
        style={{ color: "#008A8F", paddingTop: "40px" }}
      >
        Meet the Team
      </p>
      <p
        className="text-center"
        style={{ paddingBottom: "20px", fontSize: "25px" }}
      >
        Best Dentists in the Town.
      </p>
      <p
        className="text-center font-weight-light"
        style={{ paddingBottom: "40px" }}
      >
        All of out treatments and services are provided in a comfrotable,
        spa-like clinic, designed according to high-quality <br /> standards.
      </p>

      <Container>
        <Row>
          <Col sm={6}>
            <div style={{ float: "right", display: "inline-block" }}>
              <img
                className="img-fluid"
                src={Doctors}
                style={{ float: "right" }}
              />
              <p style={{ textAlign: "center" }}>
                Dr. Kiran Patil
                <br />
                BDS{" "}
              </p>
            </div>
          </Col>

          <Col sm={6}>
            <div style={{ display: "inline-block" }}>
              <img className="img-fluid" src={Doctors} />
              <p style={{ textAlign: "center", alignItems: "center" }}>
                Dr. Gauri Patil
                <br />
                BDS{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
