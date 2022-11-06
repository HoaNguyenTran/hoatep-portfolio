import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="footer-wrap">
        <Col md="4" className="footer-copywright">
          <h4>Have inspiration from Soumyajit Behera</h4>
        </Col>
        <Col md="4" className="footer-copywright">
          <h4>Copyright © {year}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
