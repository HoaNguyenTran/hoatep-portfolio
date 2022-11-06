import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myAvatar from "assets/my-avatar.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Introduce = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6rem" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm
              <span className="purple">
                <b> hoatep</b>
              </span>
              ,
              <br />
              <br />
              I'm software engineer in the Hanoi capital.
              <br />
              I fall in love with programming and I think the best way to
              acquire knowledge is to share it with others.
              <br />
              <br />I have experience in UI library especially
              <i>
                <b> Reactjs </b>
              </i>
              and
              <i>
                <b> Next.js</b>
              </i>
              .
              <br />
              Also I'm interested in topics about Nodejs and Database
              Administrator.
              <br />
              This blog contains my answers to questions I've ever struggled
              with.
              <br />
              <br />
              Happy coding! 🔥🔥🔥
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="myAvtar-wrap">
              <div className="myAvtar-bg"></div>
              <div className="myAvtar-fg">
                <Tilt>
                  <img src={myAvatar} className="" alt="avatar" />
                </Tilt>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h4>It would be great if i could connect with you 🧐</h4>
            <p className="purple">I'm on social media</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HoaNguyenTran"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Thomas_NguyenT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hoa-t-nguyen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__hoa.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/hoatepp/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Introduce;
