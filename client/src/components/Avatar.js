import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// TODO: fix to correct avatar
const avatar = "https://i.pravatar.cc/75";



export default function Avatar(props) {
    const [recipes, setRecipes] = useState([
        {
            img: '',
            name: 'BOB',
            
        }
    ]);
    return (
    <div>
            <Image src={props.src || avatar} roundedCircle={props.rounded} />
         <h3>{props.firstname}</h3>
              
</div>
    );
};