import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApachenetbeanside,
  SiVisualstudiocode,
  SiSublimetext,
  SiPostman,
  SiHeroku,
  SiXampp,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> 
        <p>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> 
        Postman
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /> 
        Heroku
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp /> 
        Xampp
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify /> 
        Netlify
      </Col>
    </Row>
  );
}

export default Toolstack;
