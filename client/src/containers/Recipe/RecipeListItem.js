import React from "react";
import { Col, Row } from "react-bootstrap";
import RecipeAvatar from "../../components/RecipeAvatar";
import Avatar from "../../components/Avatar";


const avatar = "https://i.pravatar.cc/75";

export default function RecipeListItem(props) {
  return (
    <div className="recipe-list-item">
      <Row>
        <Col xs={12} sm={5} md={3}>
        <RecipeAvatar/>

          {/* <Avatar user={props.good.User}></Avatar> */}
        </Col>

        <Col xs={12} sm={7} md={9}>
          {/* <img>{props.good.recipeurl}</img> */}
          <h4>{props.good.recipename}</h4>
          <p>{props.good.description}</p>
        </Col>
      </Row>
    </div>
  );
}
