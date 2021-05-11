import React, { useEffect, useState } from "react";

//import containers
import Navbar from "../containers/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeContainer from "../containers/Recipe/RecipeContainer";
import RecipeCard from "../containers/Recipe/RecipeCard";

//import components
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import RecipeAvatarCard from "../components/RecipeAvatarCard";

export default function UserPage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/api/userDetail")
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  if (!user.email) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Container>
        <Navbar />
        <Container className="bg-container avatar">
          <Avatar user={user} />
        </Container>
        <Container className="bg-container recipe-list-container">
          <Row>
            <Col>
              <h2>BakedGoods</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <RecipeContainer />
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
          
        </Container>
        <Footer />
      </Container>
    </main>
  );
}
