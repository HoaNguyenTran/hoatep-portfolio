import Particle from "components/Particle";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import laptopImg from "assets/about.png";
import "./style.css";
import { ImPointRight } from "react-icons/im";
import GitHubCalendar from "react-github-calendar";

import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJsBadge,
  DiVisualstudio,
  DiBootstrap,
  DiTerminal,
  DiCss3,
} from "react-icons/di";
import { SiMysql, SiExpress, SiJirasoftware, SiPostman } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              //   paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Insight</strong>
            </h2>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi Everyone, The fullname is
                    <span className="purple"> Hoà T. Nguyen </span>
                    from <span className="purple"> HaNoi, Vietnam.</span>
                    <br /> I graduated from Post and Telecommunications
                    Institute of Technology
                    <br />
                    Currently I am a junior developer at medical corporation.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Read tech blogs and Watch programming
                      channel.
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Practive write tech blogging in english.
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Dating with
                      <span className="purple"> @mailu</span>
                    </li>
                  </ul>

                  <p style={{ color: "rgb(155 126 172)", marginTop: "3rem" }}>
                    "Stay hungry. stay foolish."
                  </p>
                  <footer className="blockquote-footer">Steve Jobs</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="project-heading">
          My <strong className="purple">Skillset </strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiJsBadge />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiExpress />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiExpress />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <AiFillHtml5 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiBootstrap />
          </Col>
        </Row>

        <h2 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          {/* <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col> */}
          <Col xs={4} md={2} className="tech-icons">
            <DiVisualstudio />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiJirasoftware />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiTerminal />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Code</strong>
          </h2>
          <GitHubCalendar
            username="HoaNguyenTran"
            blockSize={16}
            blockMargin={6}
            color="#c084f5"
            fontSize={16}
          />
        </Row>
      </Container>
    </Container>
  );
};

export default About;
