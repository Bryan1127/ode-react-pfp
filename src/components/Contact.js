import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Contact({ customWidth = "600px" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleBackToHome = () => {
    navigate("/"); // Navigate back to home page
  };

  if (submitted) {
    return (
      <Card
        className="shadow p-4"
        style={{
          backgroundColor: "#6c757d ",
          color: "#ffffff",
          maxWidth: customWidth /* Customizable width */,
          margin: "0 auto" /* Center the card */,
        }}
      >
        <h2>Thank you, {formData.name}!</h2>
        <p>Your message has been sent.</p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Message:</strong> {formData.message}
        </p>
        {/* Back to Home button */}
        <div className="text-end">
          <Button
            variant="secondary"
            style={{ backgroundColor: "#343a40", borderColor: "#343a40" }}
            onClick={handleBackToHome}
          >
            Back to Home
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="shadow p-4"
      style={{
        backgroundColor: "#6c757d",
        color: "#000000",
        fontFamily: "Times New Roman, Times, serif",
        maxWidth: customWidth /* Customizable width */,
        margin: "0 auto" /* Center the card */,
      }}
    >
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: "#343a40", borderColor: "#343a40" }}
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default Contact;
