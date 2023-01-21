import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Tvshow from "../../Assets/Projects/Tvshow.png";
import realtor from "../../Assets/Projects/realtor.png";
import dash from "../../Assets/Projects/dash.png";
import space from "../../Assets/Projects/space.png";
import math from "../../Assets/Projects/math.png";
import cat from "../../Assets/Projects/cat.png";
import google from "../../Assets/Projects/google.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tvshow}
              isBlog={false}
              title="TvShows"
              description="TvShows is a web application based on TVmaze external API, that fetches data about TV series and movies. It enables the user to **Like** and **Comment** on a particular **Movie** of their choice."
              link="https://yorsyboy.github.io/Javascript-capstone/"
              link1="https://github.com/Yorsyboy/Javascript-capstone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realtor}
              isBlog={false}
              title="Realtor Clone"
              description="Realtor clone is a webapp created with ReactJs and firestore that allows a user to sell and rent apartments/houses. It's also has a geolocation feature that allows the user to see the location of the apartment/house on a map."
              link="https://realtor-clone-henna.vercel.app/"
              link1="https://github.com/Yorsyboy/realtor-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google-clone"
              description="Google-clone is a web search engine that mimics the features of Google. It is designed to provide users with a similar experience to the popular search engine and allows them to access information from websites and images."
              link="https://google-clone-yorsyboy.vercel.app/"
              link1="https://github.com/Yorsyboy/google-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dash}
              isBlog={false}
              title="Dashboard"
              description="This is a simple dashboard that I built with React.js, It has different sections that display different data"
              link="https://dashboard0.netlify.app/"
              link1="https://github.com/Yorsyboy/Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space Traveler's Hub"
              description="Space Travel is an app I built with React.js that allows users to book rockets and join selected missions."
              link="https://space-travel00.netlify.app/"
              link1="https://github.com/Yorsyboy/space-travelers-hub-capstoneproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={math}
              isBlog={false}
              title="Maths Magician"
              description="This is a website for all the fans of mathematics, Math Magicians is a Single Page Application 
              (SPA) created in React that allows users to make simple calculations and read some famous quotes."
              link="https://maths-mag.netlify.app/"
              link1="https://github.com/Yorsyboy/math-Magicians"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cat}
              isBlog={false}
              title="Catty"
              description="Catty is a simple SPA webapp built with React, that display different breeds of cats and informations about them."
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
