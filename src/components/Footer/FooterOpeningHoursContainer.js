import React from "react";
import { Container, Row, Col } from "react-grid-system";
export default function OpeningHoursContainer() {
  return (
    <div>
      <p className="text-left FooterP" style={{ color: "#FFFEFF" }}>
        Opening Hours
      </p>
      <Container>
        <Row className="FooterPOthers">
          <Col sm={6}>
            <p className="text-left" style={{ color: "#FFFEFF" }}>
              Monday
            </p>
          </Col>
          <Col sm={6}>
            <p className="text-right" style={{ color: "#FFFEFF" }}>
              10.00 - 22.00
            </p>
          </Col>
        </Row>

        <Row className="FooterPOthers">
          <Col sm={6}>
            {" "}
            <p className="text-left" style={{ color: "#FFFEFF" }}>
              Tuesday
            </p>
          </Col>
          <Col sm={6}>
            <p className="text-right" style={{ color: "#FFFEFF" }}>
              10.00 - 22.00
            </p>
          </Col>
        </Row>

        <Row className="FooterPOthers">
          <Col sm={6}>
            {" "}
            <p className="text-left" style={{ color: "#FFFEFF" }}>
              Wedensday
            </p>
          </Col>
          <Col sm={6}>
            <p className="text-right" style={{ color: "#FFFEFF" }}>
              10.00 - 22.00
            </p>
          </Col>
        </Row>

        <Row className="FooterPOthers">
          <Col sm={6}>
            {" "}
            <p className="text-left" style={{ color: "#FFFEFF" }}>
              Thursday
            </p>
          </Col>
          <Col sm={6}>
            <p className="text-right" style={{ color: "#FFFEFF" }}>
              10.00 - 22.00
            </p>
          </Col>
        </Row>

        <Row className="FooterPOthers">
          <Col sm={6}>
            {" "}
            <p className="text-left" style={{ color: "#FFFEFF" }}>
              Friday
            </p>
          </Col>
          <Col sm={6}>
            <p className="text-right" style={{ color: "#FFFEFF" }}>
              10.00 - 22.00
            </p>
          </Col>
        </Row>

        <Row className="FooterPOpeningHours">
          <Col sm={6}>
            {" "}
            <p className="text-left" style={{ color: "#FFFEFF" }}>
              Sunday
            </p>
          </Col>
          <Col sm={6}>
            <p className="text-right" style={{ color: "#FFFEFF" }}>
              10.00 - 22.00
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// #FFFEFF
