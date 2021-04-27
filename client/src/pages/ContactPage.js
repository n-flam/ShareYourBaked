import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

import imageOverlay from "../img/sharon-mccutcheon-TMwHpCrU8D4-unsplash.jpg";

class Contact extends React.Component {
  render() {
    return (
      <Container className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }} >
        <Row>
          <Col>
            <h5 className="title-left">contact</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
