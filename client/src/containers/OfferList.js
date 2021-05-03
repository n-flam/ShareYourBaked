import React from "react";

// import components
import Media from "react-bootstrap/Media";
import Avatar from "../components/Avatar";
// import Card from 'react-bootstrap/Card';


export default function OfferList() {


    return (


        
        <ul className="list-unstyled">
  <Media as="li">

      <Avatar></Avatar>
    {/* <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    /> */}
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>

  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>

  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>
</ul>
    );
};