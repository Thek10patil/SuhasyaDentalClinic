import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-grid-system";
import FooterContactUsContainer from "./FooterContactUsContainer";
import FooterOpeningHoursContainer from "./FooterOpeningHoursContainer";
import FooterLocateUsContainer from "./FooterLocateUsContainer";

export default function FooterContainer() {
  return (
    <div style={{ backgroundColor: "#058a93", padding: "50px" }}>
      <Container>
        <Row>
          <Col sm={4}>
            <FooterContactUsContainer />
          </Col>
          <Col sm={4}>
            <FooterLocateUsContainer />
          </Col>
          <Col sm={4}>
            <FooterOpeningHoursContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
