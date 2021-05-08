import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// TODO: fix to correct avatar
const avatar = "https://www.thecountrycook.net/wp-content/uploads/2019/05/MARASCHINO-CHERRY-CAKE-thumbnail.jpg";

export default function RecipeAvatar(props) {
  return (
    <div>
      <Row>
        <Col xs={12} sm={5} md={3}>
          <Image
            width={75}
            height={75}
            src={props.user.imgurl || avatar}
            // roundedCircle
          />
        </Col>
        <Col xs={12} sm={7} md={9}>
          <h3>{props.user.name}</h3>
        </Col>
      </Row>
    </div>
  );
}
