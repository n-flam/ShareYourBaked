import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// TODO: fix to correct avatar
const recipeavatar = "https://i.pravatar.cc/75";

export default function RecipeAvatarCard(props) {
  // if (props.user == null) {
  //   return <div>Missing User.</div>;
  // }
  return (
    <div>
      <Row>
        <Col xs={12} sm={5} md={3}>
          <Image
            width={250}
            height={100}
            src={RecipeAvatarCard}
            // src={props.good.imgurl || avatar}
            // roundedCircle
          />
        </Col>
      </Row>
    </div>
  );
}
