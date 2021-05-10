import React from "react";

//import components
import Carousel from "react-bootstrap/Carousel";

export default function () {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-style-picture"
            src={require('../img/bakedgoods/lecoquin-foods-74u78crHyeI-unsplash.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-style-picture"
            src={require('../img/bakedgoods/honey-fangs--JU0sqGjeC0-unsplash.jpg')}
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-style-picture"
            src={require('../img/bakedgoods/foodie-flavours-mxUf5V0-FYQ-unsplash.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption >
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
