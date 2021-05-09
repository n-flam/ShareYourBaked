import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

export default function Avatar(props) {
    return (
        <Form>
          <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="name"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phonenumber</Form.Label>
              <Form.Control
                ref={phoneNumberRef}
                type="phoneNumber"
                placeholder="Phonenumber"
              />
            </Form.Group>


            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                ref={imageUrlRef}
                type="string"
                placeholder="Image"
              />
            </Form.Group>

            {error && <Form.Text className="text-muted">{error}</Form.Text>}
            <Button variant="outline-warning" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
    );
};

