import React from "react";
import emailjs from "emailjs-com";

// $ npm install emailjs-com --save

import { Link } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// import Button from "react-bootstrap/Button";
import imageOverlay from "../img/sharon-mccutcheon-TMwHpCrU8D4-unsplash.jpg";
import Navbar from "../containers/Navbar";
// import './ContactUs.css';

// export default function ContactUs() {

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_duahufk",
      "template_m4l9ig7",
      e.target,
      "user_DGYRSqkIH0LDawhn5sLvQ"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  // e.target.restart();
}

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Navbar></Navbar>

        <Container
          className="contact paralax-mf footer-paralax bg-image sect-mt4 route contact"
          style={{ backgroundImage: "url(" + imageOverlay + ")" }}>
          <Row>
        <Col>
        <h5 className="title-left">Contact Us</h5>        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="contact-form" onSubmit={sendEmail}>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"

              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                  name="message"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
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
}

export default Contact;
