import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/TAIWO-TOYOSI-CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Taiwo Toyosi </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            <br />
            I am a passionate software developer who has a flair for UI design and 
            I'm a full-stack development student at Microverse, a remote software development 
            company that allows developers from all over the world to pair-program and build projects 
            together. I have spent the next last few months completely immersed in remote development, 
            building everything from landing pages to Rails APIs
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching animes and movies
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            Code is like humor. When you have to explain it, it’s bad"{" "}
          </p>
          <footer className="blockquote-footer">Taiwo Toyosi</footer>&nbsp;

          <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
