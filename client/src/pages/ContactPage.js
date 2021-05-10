import React from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";

// $ npm install emailjs-com --save

import { Link } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// import Button from "react-bootstrap/Button";
// import imageOverlay from "../img/sharon-mccutcheon-TMwHpCrU8D4-unsplash.jpg";
import Navbar from "../containers/Navbar";


import Footer from "../components/Footer";
import CarouselContact from "../components/CarouselContact";


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

        <Container className="bg-container contact">
          <Row>
            <Col>
            </Col>
          </Row>
          <CarouselContact>
                <h1>Contact Us</h1>
              </CarouselContact>
          <Row>
            <Col>
              <h5 className="title-left">Contact Us</h5>
              <Form className="contact-form" onSubmit={sendEmail}>
              <label>Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />

                <label>Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />

                <label>Your email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />

                <label>Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                

                <Button
                  variant="outline-warning"
                  type="submit"
                  className="button button-a button-big button-rouded"
                  value="Send"
                >
                  Send Message
                </Button>
              </Form>
            </Col>
           
          </Row> 
          <Col>
              <p className="lead">
                Whether you want to get in touch, talk about a project
                collaboration, or just say hi, I'd love to hear from you.
                <br />
                Simply fill the from and send me an email.
              </p>
            </Col>
          <Row>
            <i className="ion-social-linkedin"></i>
          </Row>
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Contact;
