import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


export default function LoginPage() {
  const [error, setError] = useState("");
  const [bakedgoods, setBakedgoods] = useState([]);

  useEffect(() => {
    fetch("/api/bakedgoods", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        return resp.json();
      })
      .then((data) => {
        setBakedgoods(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

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
      <Row>
        <Col>
          <h1>User</h1>
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
  );
}
