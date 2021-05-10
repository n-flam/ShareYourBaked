import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import RecipeAvatar from "../../components/RecipeAvatar";
import Collapse from 'react-bootstrap/Collapse'
import RecipeCard from "./RecipeCard";

const avatar = "https://i.pravatar.cc/75";

export default function RecipeListItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="recipe-list-item" onClick={() => setOpen(!open)}>
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
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Row>
            <Col>
            <RecipeCard></RecipeCard>
            <p>ingredience:{props.good.ingredience}</p>
            <p>pieces:{props.good.pieces}</p>
            {/* <p>Contact:{props.user.phoneNumber}</p> */}
            </Col>
          </Row>
        </div>
      </Collapse>
    </div>
  );
}
