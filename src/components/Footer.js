import React from "react";
import { useTranslate } from "react-translate";

import { Container, Row, Col, Image } from "react-bootstrap";

import "./styles/Footer.css";
import eterwareLogo from "../images/varios/logotipo_eterware.png";
import logo1 from "../images/varios/logos/1.png";
import logo2 from "../images/varios/logos/2.png";
import logo3 from "../images/varios/logos/3.png";
import logo4 from "../images/varios/logos/4.png";

export default function Footer() {
  let t = useTranslate("Home");

  return (
    <Container fluid className="background_black_color font_white_color">
      <Row className="py-3 px-2">
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center align-items-md-start"
        >
          <div className="eterware_container d-flex flex-column align-items-center">
            <p>{t("eterware")}</p>
            <a href={t("eterwareLink")} target="_blank">
              <Image src={eterwareLogo} className="eterware_logo" />
            </a>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-row justify-content-center justify-content-md-end"
        >
          <a href="https://www.ada.org/en" target="_blank">
            <Image src={logo1} className="footer_image mx-2" />
          </a>
          <a href={t("bidLink")} target="_blank">
            <Image src={logo2} className="footer_image mx-2" />
          </a>
          <a href="https://acprostodoncia.org.co/" target="_blank">
            <Image src={logo3} className="footer_image mx-2" />
          </a>
          <a href="https://aacd.com/" target="_blank">
            <Image src={logo4} className="footer_image mx-2" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
