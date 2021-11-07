import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dino from "../../Assets/Projects/dino.png";
import pics from "../../Assets/Projects/picsdetect.png";

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
              imgPath={dino}
              isBlog={false}
              title="Dino Search App"
              description="A simple app used to search for different dinosaurs built using Reactjs and nodejs, the app works fine locally but still working on the server side to work globally instead of locally "
              link="https://dino-search.herokuapp.com/"
              link1="https://github.com/Yorsyboy/Dino-search-app"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
