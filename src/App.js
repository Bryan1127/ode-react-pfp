import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar
        style={{ backgroundColor: "#6c757d " }}
        variant="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/" style={{ color: "#ffffff" }}>
            My Profile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{ color: "#ffffff" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: "#ffffff" }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/skills" style={{ color: "#ffffff" }}>
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: "#ffffff" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
