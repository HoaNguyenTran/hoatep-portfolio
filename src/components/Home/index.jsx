import Particle from "components/Particle";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "assets/home-main.svg";
import "./style.css";
import Typing from "./Typing";
import Introduce from "./Introduce";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!&nbsp;
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M&nbsp;
                <strong className="purple">HOÀ T. NGUYEN</strong>
                &nbsp;(hoatep)
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typing />
              </div>
            </Col>

            <Col md={5}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Introduce />
    </section>
  );
};

export default Home;
