import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import "./styles/Phrase.css";

export default function Phrase(props) {
  return (
    <Row noGutters>
      <Col>
        <div className="background_black_color py-3 px-2">
          <h2 className="Phrase_message text-center font_white_color">
            {props.message}
          </h2>
        </div>
      </Col>
    </Row>
  );
}
