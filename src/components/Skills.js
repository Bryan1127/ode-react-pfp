import React from "react";
import { ListGroup, Card } from "react-bootstrap";

function Skills({ customWidth = "600px" }) {
  return (
    <Card
      className="shadow"
      style={{
        backgroundColor: "#6c757d",
        color: "#343a40",
        border: "1px solid #343a40" /* Thinner border */,
        borderRadius: "5px" /* Slightly rounded corners */,
        fontFamily: "Times New Roman, Times, serif",
        maxWidth: customWidth /* Customizable width */,
        margin: "0 auto" /* Center the card */,
      }}
    >
      <Card.Body>
        <Card.Title>
          <h2>My Skills</h2>
        </Card.Title>
        <ListGroup variant="flush" style={{ color: "#343a40" }}>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>HTML & CSS</ListGroup.Item>
          <ListGroup.Item>React.js</ListGroup.Item>
          <ListGroup.Item>Node.js</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Skills;
