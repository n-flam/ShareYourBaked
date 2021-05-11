import React, {useState, useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import RecipeAvatar from "../../components/RecipeAvatar";
import Collapse from 'react-bootstrap/Collapse'
import RecipeCard from "./RecipeCard";

const avatar = "https://i.pravatar.cc/75";

export default function RecipeListItem(props) {
  const [open, setOpen] = useState(false);
 console.log(props)
  return (
    <div className="recipe-list-item" onClick={() => setOpen(!open)}>
      <Row>
        <Col xs={12} sm={5} md={3}>
        <RecipeAvatar good={props.good}/>

          {/* <Avatar user={props.good.User}></Avatar> */}
        </Col>

        <Col xs={12} sm={7} md={9}>
          {/* <img>{props.good.recipeurl}</img> */}
          <h4>{props.good.recipename}</h4>
          <p>{props.good.description}</p>
        </Col>
      </Row>
      <Collapse in={open} className="collapse-style">
        <div id="example-collapse-text">
          <Row>
            <Col xs={12} sm={12} md={12}><h4>Contact Name: {props.good.User.name}</h4></Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6}>
            <p>Ingredience: {props.good.ingredience}</p>
            <p>Pieces: {props.good.pieces}</p>
            </Col>
            <Col xs={12} sm={6} md={6}>
            <p>Phonenumber: {props.good.User.phoneNumber}</p>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Collapse>
    </div>
  );
}
