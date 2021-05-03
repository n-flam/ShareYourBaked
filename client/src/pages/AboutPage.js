import React, { useState } from "react";

//import components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "../containers/Navbar";

export default function AboutPage() {
  const [error, setError] = useState("");

  function handleLogout() {
    fetch("/api/logout", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        window.location = "/login";
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <Container>
      <Navbar></Navbar>
    <Container className="about">
      <Row>
        <Col>
          <h1>About</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>

    </Container>
  );
}
