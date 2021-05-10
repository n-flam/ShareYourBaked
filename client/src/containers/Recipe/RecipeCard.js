import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import RecipeListItem from "./RecipeListItem";
import Card from 'react-bootstrap/Card'


const avatar = "https://i.pravatar.cc/75";


export default function RecipeCard() {

    const [recipes, setRecipes] = useState([
        {
            img: '',
            title: 'Masaka',
            description: 'tomato, capsicum, eggs',

        }
    ]);

    useEffect(() => {
        
        // TODO: call api to populate the recipes


    }, []); // put in empty array -- means to run this function for only 1 time when the component is loaded

return (
    <div>
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  </div>
);
}
