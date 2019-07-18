import React from "react";

import { Row, Col, Image } from "react-bootstrap";
import LazyLoad from "react-lazyload";

import heroImage from "../images/tarsys/tarsys_3_gris.png";
import "./styles/Hero.css";
import "../global_styles/fadeInUp.css";

export default function Hero() {
  return (
    <Row noGutters>
      <Col>
        <div className="hero">
          <LazyLoad>
            <Image src={heroImage} className="hero_image" />
          </LazyLoad>
          <div className="hero_title_container">
            <h1 className="hero_title animated animatedFadeInUp fadeInUp text-center">
              Tarsys Loayza
              {window.matchMedia("(max-width: 320px)").matches && <br />} Roys
            </h1>
          </div>
        </div>
      </Col>
    </Row>
  );
}
