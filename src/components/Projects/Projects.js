import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Tvshow from "../../Assets/Projects/Tvshow.png";
import pics from "../../Assets/Projects/picsdetect.png";
import insta from "../../Assets/Projects/instaverse.png";
import dash from "../../Assets/Projects/dash.png";
import space from "../../Assets/Projects/space.png";
import math from "../../Assets/Projects/math.png";
import cat from "../../Assets/Projects/cat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pics}
              isBlog={false}
              title="Face Detect"
              description="A simple face recongition App built with Reactjs, nodejs and clarifai Api key, it's also count the number of times a user detect a pics "
              link="https://pics-detect.herokuapp.com/"
              link1="https://github.com/Yorsyboy/smart-brain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tvshow}
              isBlog={false}
              title="TvShows"
              description="**TvShows** is a web application based on [TVmaze external API] that fetches data about TV series and movies. It enables the user to **Like** and **Comment** on a particular **Movie** of their choice."
              link="https://yorsyboy.github.io/Javascript-capstone/"
              link1="https://github.com/Yorsyboy/Javascript-capstone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insta}
              isBlog={false}
              title="Instaverse"
              description="A full stack MERN app, a simple blog that allows users to post interesting events"
              link="https://instarverse.netlify.app/"
              link1="https://github.com/Yorsyboy/Instaverse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dash}
              isBlog={false}
              title="Dashboard"
              description="A simple dashboard"
              link="https://dashboard0.netlify.app/"
              link1="https://github.com/Yorsyboy/Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space Traveler's Hub"
              description="Space Travel allows users to book rockets and join selected missions."
              link="https://space-travel00.netlify.app/"
              link1="https://github.com/Yorsyboy/space-travelers-hub-capstoneproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={math}
              isBlog={false}
              title="Maths Magician"
              description="A website for all the fans of mathematics, Math Magicians is a Single Page Application 
              (SPA) created in React that allows users to make simple calculations and Read some famous Quotes."
              link="https://maths-mag.netlify.app/"
              link1="https://github.com/Yorsyboy/math-Magicians"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cat}
              isBlog={false}
              title="Maths Magician"
              description="A Simple SPA webapp that display different breeds of cat and informations about them."
              link="https://catty-catty.netlify.app/"
              link1="https://github.com/Yorsyboy/react-capstone"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
