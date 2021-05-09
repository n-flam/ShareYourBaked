import React from "react";
import { Col, Container, Row } from "react-bootstrap";


// import Components

export default function Avatar(props) {
  return (
    <div>
      <Container className="footer-css">
        <Row>
          <Col>
            <span> Share Your Baked </span>
            {/* Todoes */}
          </Col>
        </Row>
        <Row>
            <Col>
            <span>
              Made with <i class="icon ion-heart"></i> By
              <a href="dontforgetme" target="blank"></a>
               Nadja
            </span>
            </Col>
        </Row>
        <Row>
            <Col>
            <span> © 2021 Copyright </span>
            </Col>
        </Row>
      </Container>
    </div>
  );
}
