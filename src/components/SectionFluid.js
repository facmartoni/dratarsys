import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "./styles/SectionFluid.css";

export default function SectionFluid(props) {
  const order = props.order;
  const color = props.color;
  let orderFirstCol = null;
  let orderSecondCol = null;

  if (order === "imagefirst") {
    orderFirstCol = 1;
    orderSecondCol = 2;
  } else if (order === "textfirst") {
    orderFirstCol = 2;
    orderSecondCol = 1;
  } else {
    return "Orden de columnas mal seteado";
  }

  return (
    <Row noGutters>
      <Col
        xs={12}
        md={{ span: 6, order: orderFirstCol }}
        className={props.className}
      >
        <Image src={props.image} className="SectionFluid_image w-100" />
      </Col>
      <Col
        xs={12}
        md={{ span: 6, order: orderSecondCol }}
        className={
          color +
          " font_white_color text-center d-flex flex-column justify-content-center p-4"
        }
      >
        {props.children}
      </Col>
    </Row>
  );
}
