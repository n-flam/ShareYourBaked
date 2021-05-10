import React from "react";

//import components
import Carousel from "react-bootstrap/Carousel";

export default function () {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../img/about/dari-lli-SWOMualft48-unsplash.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
          <p>Have fun with your kids.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../img/about/steven-libralon-Do1GQljlNk8-unsplash.jpg')}
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>Have fun with your kids.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../img/contact/')}
            alt="Third slide"
          />

          <Carousel.Caption >
          <p>Have fun with your kids.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
