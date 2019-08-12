import React from "react";
import { useTranslate } from "react-translate";

import { Container, Row, Col } from "react-bootstrap";

import "./styles/Contact.css";

export default function Contact() {
  let t = useTranslate("Home");

  return (
    <Container>
      <Row className="my-4">
        <Col className="text-center">
          <h2 id="contacto" className="mb-4">
            {t("contactTitle")}
          </h2>
          <p className="big_text">
            {t("contactPhone")}{" "}
            <a
              className="font_secondary_color"
              href="https://api.whatsapp.com/send?phone=573103664278&text=Consulta+Instagram"
              target="_blank"
            >
              +57 310 3664278
            </a>
          </p>
          <p className="big_text">
            {t("contactEmail")}{" "}
            <a
              className="font_secondary_color"
              href={`mailto:${t("contactEmailDirection")}`}
            >
              {t("contactEmailDirection")}
            </a>
          </p>
          <div className="mt-4">
            <a
              href="https://www.facebook.com/sonrisaperfecta.tarsysloayza"
              target="_blank"
              className="contact_social_network text-reset"
            >
              <i className="flaticon-facebook mr-2" />
            </a>
            <a
              href="https://www.instagram.com/tarsysloayza/"
              target="_blank"
              className="contact_social_network text-reset"
            >
              <i className="flaticon-instagram ml-2" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
