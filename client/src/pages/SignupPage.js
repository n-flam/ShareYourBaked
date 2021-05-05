import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

//import components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../containers/Navbar";






import Input from "../containers/SignupInput";
// import { Navbar } from "react-bootstrap";

export default function SignupPage() {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const imageUrl = useRef();
  const name = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,

    };

    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
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
      .then(() => {
        window.location = "/";
      })
      .catch((error) => {
        setError(error);
      });
  }

    const links = [{
      title: "Landing",
      href: '/',
    },
    {
      title: "Login",
      href: '/login',
    },
    
    {title: "Signup", href: "/signup"},
    {title: "Contact", href: "/contact"},
    {title: "About", href: "/about"},
    
  ];

  return (
    <Container>
      <Navbar></Navbar>
    <Container className="signup">
      <Row>
        <Col>
          <h1>Signup</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={name}
                type="name"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                ref={imageUrl}
                type="string"
                placeholder="Image"
              />
            </Form.Group>

            {error && <Form.Text className="text-muted">{error}</Form.Text>}
            <Button variant="outline-warning" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
     
     
    </Container>
    
    </Container>

    
  );
}
