import React from "react";

import { Card } from "react-bootstrap";
import ButtonPink from "./ButtonPink";

import "./styles/Award.css";

export default function Award(props) {
  return (
    <Card
      style={{ width: "18rem" }}
      className="Award d-flex flex-column align-items-center rounded-0 mb-4"
    >
      <Card.Img className="Award_image" variant="top" src={props.image} />
      <Card.Body className="Award_body d-flex flex-column align-items-center justify-content-center">
        <Card.Title>
          <h3>{props.title}</h3>
        </Card.Title>
        <Card.Text className="mb-3">
          <small>{props.text}</small>
        </Card.Text>
        <ButtonPink className="Award_button">
          <p>{props.button}</p>
        </ButtonPink>
      </Card.Body>
    </Card>
  );
}
