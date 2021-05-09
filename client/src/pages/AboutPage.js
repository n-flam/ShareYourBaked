import React, { useState } from "react";

//import components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../containers/Navbar";
import Carousel from "../components/CarouselAbout";
import Footer from "../components/Footer";

export default function AboutPage() {
  const [error, setError] = useState("");

  return (
    <Container>
      <Navbar></Navbar>
      <Container className="bg-container about">
        <div style={{ opacity: 1 }}>
          <Row>
            <Col>
              <Carousel>
                <h1>About</h1>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Share Your Baked</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Imaging you are a parent who enjoys baking with and for your
                children.
              </p>
              <p>
                So one of your regular after school activities is baking for and
                with your children. You having so much fun with the kids that
                your most of the time end up with much more than you can eat.
              </p>
              <p>
                You are a parent who doesn’t like to waste food so your fridge
                is running over with lodes of baked goods….. so your kids are
                upset that they can’t help your with new dishes because you
                don’t have any space left.
              </p>
              <p>
                Here comes “Share your baked” handy. We went to give you an
                oporunetiy to share your kids master pics with their friends and
                community.
              </p>
              <p>
                You got too much of an item, you post it with a picture or more,
                short description and also ingredients, you categories the item
                with the most common categories like, GF, Vegan, Vegetarian etc.
                If someone is interested, the person can contact you and you can
                exchange the baked goods and make someone else happy with
                Sharing Your Baked.
              </p>
              <p>
                The best part ist your kids can help you create some new goods,
                and enjoy their after school treat. :-)
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </Container>
  );
}
