import React, { useEffect, useState } from "react";

//import components
import Navbar from "../containers/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../components/Avatar";
import RecipeContainer from "../containers/Recipe/RecipeContainer";
import RecipeCard from "../containers/Recipe/RecipeCard";
// import { Navbar } from "react-bootstrap";


export default function UserPage() {
  return (
    <main>
      <Container>
      <Navbar />
      <Container className="avatar"> 
        <Avatar />
      </Container>
      <Container className="recipe-list-container">
      <Row>
        <Col>
          <h1>BakedGoods</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <RecipeContainer/>
        </Col>
      </Row>
      <Row>
        <Col>
        {/* <RecipeCard></RecipeCard> */}
        </Col>
      </Row>
      </Container>
      </Container>    
      </main>

      
  );
}
