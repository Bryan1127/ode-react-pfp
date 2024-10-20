import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Home({ customWidth = "600px" }) {
  return (
    <Card
      className="shadow p-3"
      style={{
        backgroundColor: "#6c757d ",
        color: "#000000",
        fontFamily: "Times New Roman, Times, serif",
        maxWidth: customWidth,
        margin: "0 auto",
      }}
    >
      <Card.Title>
        <h2> Welcome to My Profile!</h2>
      </Card.Title>
      <Container
        fluid
        style={{
          backgroundColor: "#ffffff",
          minHeight: "10vh",
          maxWidth: customWidth,
        }}
      >
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "15vh" }}
        >
          <Col md={8} className="text-center">
            <p
              style={{
                color: "#000000",
                fontFamily: "Times New Roman, Times, serif",
              }}
              className="lead"
            >
              Hi, I'm Kent Bryan N. Ode, a passionate 3rd-year Computer Science
              student aiming to create meaningful and innovative software
              solutions!
            </p>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default Home;
