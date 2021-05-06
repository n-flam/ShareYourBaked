import React from "react";
import { Col, Row } from "react-bootstrap";
import Avatar from "../../components/Avatar";

export default function RecipeListItem(props) {
  console.log(props);
  return (
    <div>
      <Row>
        <Col xs={12} sm={5} md={3}>
          <Avatar user={props.good.User}></Avatar>
        </Col>

        <Col xs={12} sm={7} md={9}>
          {/* <img>{props.good.recipeurl}</img> */}

          <h3>{props.good.recipename}</h3>

          <p>{props.good.ingredience}</p>
        </Col>
      </Row>
    </div>
  );
}
