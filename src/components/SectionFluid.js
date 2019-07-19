import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "./styles/SectionFluid.css";

export default function SectionFluid(props) {
  const order = props.order;
  const color = props.color;

  if (order === "imagefirst") {
    return (
      <Row noGutters>
        <Col xs={12} md={6} className={props.className}>
          <Image src={props.image} className="SectionFluid_image w-100" />
        </Col>
        <Col
          className={
            color +
            " font_white_color text-center d-flex flex-column justify-content-center p-4"
          }
        >
          {props.children}
        </Col>
      </Row>
    );
  } else {
    return (
      <Row noGutters>
        <Col
          className={
            color +
            " font_white_color text-center d-flex flex-column justify-content-center"
          }
          xs={12}
          md={6}
        >
          {props.children}
        </Col>
        <Col className={props.className}>
          <Image src={props.image} className="SectionFluid_image w-100" />
        </Col>
      </Row>
    );
  }
}
