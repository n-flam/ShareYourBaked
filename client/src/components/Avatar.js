import React from "react";
import Image from "react-bootstrap/Image";

// TODO: fix to correct avatar
const avatar = "https://i.pravatar.cc/75";

export default function Avatar(props) {

    return (
        <Image src={props.src || avatar} roundedCircle={props.rounded} />

    );
};