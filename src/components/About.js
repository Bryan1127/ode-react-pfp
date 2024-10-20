import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function About({ customWidth = "700px" }) {
  return (
    <Card
      className="shadow p-3"
      style={{
        backgroundColor: "#6c757d ",
        color: "#000000",
        fontFamily: "Times New Roman, Times, serif",
        maxWidth: customWidth /* Customizable width */,
        margin: "0 auto",
      }}
    >
      <Card.Title>
        <h2>About Me</h2>
      </Card.Title>
      <Container
        fluid
        style={{ backgroundColor: "#ffffff", minHeight: "10vh" }}
      >
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "20vh" }}
        >
          <Col md={10} className="text-center">
            <p
              style={{
                color: "#000000",
                fontFamily: "Times New Roman, Times, serif",
              }}
              className="lead"
            >
              I'm a 3rd-year Computer Science student at the University of
              Cabuyao. I enjoy coding, exploring new technologies, and working
              on projects. Outside of school, I love reading tech blogs, gaming,
              and hiking.
            </p>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default About;
