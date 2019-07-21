import React from "react";

import { Image, Row, Col } from "react-bootstrap";
import LazyLoad from "react-lazyload";

import "./styles/HeroSecondary.css";
import "../global_styles/fadeInUp.css";

export default function HeroSecondary(props) {
  return (
    <Row noGutters>
      <Col>
        <div className="herosecondary">
          <LazyLoad>
            <Image src={props.image} className="herosecondary_image" />
          </LazyLoad>
          <div className="herosecondary_title_container">
            <h1 className="herosecondary_title animated animatedFadeInUp fadeInUp text-center">
              {props.title}
            </h1>
          </div>
        </div>
      </Col>
    </Row>
  );
}
