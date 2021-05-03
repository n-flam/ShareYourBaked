import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Avatar from '../../components/Avatar'

export default function RecipeListItem(props) {
    return (
        <Row>

            <Col xs={12} sm={5} md={3}>
                {/* img */}
                <Avatar src={props.img}></Avatar>
            
            </Col>

            <Col xs={12} sm={7} md={9}>
            
                {/* body */}

                <h3>{props.title}</h3>

                <p>{props.description}</p>

            </Col>


        </Row>
    )
}
