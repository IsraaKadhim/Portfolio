import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5 footer">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          {/* <Col className="p-0" md={3} sm={12}>
            Israa Kadhim
          </Col> */}
          <Col className="p-0 d-flex justify-content-middle" md={3}>
            &copy; {new Date().getFullYear()} by Israa Kadhim
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
