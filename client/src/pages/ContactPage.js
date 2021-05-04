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
      "gmail",
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
  e.target.restart();
}

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Navbar></Navbar>

        <Container
          className="contact paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(" + imageOverlay + ")" }}>
          <Row>
            <Col>
              <h5 className="title-left">Contact Us</h5>
              <form className="contact-form" onSubmit={sendEmail}>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />

                <textarea
                  className="form-control"
                  name="message"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  className="button button-a button-big button-rouded"
                  value="Send"
                >
                  Send Message
                </button>
              </form>
            </Col>
            <Col>
              <p className="lead">
                Whether you want to get in touch, talk about a project
                collaboration, or just say hi, I'd love to hear from you.
                <br />
                Simply fill the from and send me an email.
              </p>
            </Col>
          </Row>
          <Row>
            <i className="ion-social-linkedin"></i>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Contact;
