import React, { useEffect, useState } from "react";

//import components
import Navbar from "../containers/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import OfferList from "../containers/OfferList";
import Avatar from "../components/Avatar";
import RecipeContainer from "../containers/Recipe/RecipeContainer";
// import { Navbar } from "react-bootstrap";


export default function UserPage() {
  const [error, setError] = useState("");
  const [bakedgoods, setBakedgoods] = useState([]);

  useEffect(() => {
    fetch("/api/bakedgoods", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        return resp.json();
      })
      .then((data) => {
        setBakedgoods(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  function handleLogout() {
    fetch("/api/logout", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        window.location = "/login";
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <main>
      <Navbar></Navbar>
      <Container className="currentuser"> 
        <Avatar rounded />
      </Container>
      <Container className="home">
      <Row>
        <Col>
          <h1>User</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <RecipeContainer/>
    
        </Col>
      </Row>
      </Container>
      </main>

      
  );
}
