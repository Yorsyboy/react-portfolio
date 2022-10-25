import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.JPG";
import { useHistory } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const navigate = useHistory();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
            </h1>

            <h1 className="heading-name">
              I'm
              <strong className="main-name"> Taiwo Toyosi</strong>
            </h1>

            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1> */}
            <p className="home-about-body">
              A Software Developer passionate about building interactive interfaces,
              I can help you build a product, feature or website. My language stack includes Ruby,
              Ruby on Rails, JavaScript and React. 
              <br />
              I am passionate about learning new technologies
              as well as building things.I fell in love with programming ever since I have been building
              projects with the stacks mentioned above.
              <br />
              I am a self-taught developer and I am currently looking for new opportunities to grow within a 
              technical team.
            </p>
            <button className="btn btn-primary" onClick={() => navigate.push('/project')}>See Projects</button>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Yorsyboy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Tboytaiwo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/taiwo-toyosi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home;
