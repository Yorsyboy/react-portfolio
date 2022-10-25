import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiHtml5,
  DiCss3,
  DiGit,
  DiRuby,
} from "react-icons/di";

import { SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        CSS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        Tailwind
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
        Ruby
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        Javascript
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        Node
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        React
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        Postgresql
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
