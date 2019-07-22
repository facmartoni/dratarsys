import React from "react";
import { useTranslate } from "react-translate";

import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import HeroSecondary from "../components/HeroSecondary";

import "./styles/Carrera.css";
import carreraHeroImage from "../images/premios/2.png";

export default function Carrera() {
  let t = useTranslate("Carrera");

  return (
    <>
      <HeroSecondary image={carreraHeroImage} title={t("carreraTitle")} />
      <Container className="carrera_container">
        <Row noGutters className="py-4">
          <Col>
            <Accordion defaultActiveKey="0">
              <Card className="rounded-0">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="0"
                  className="background_secondary_color rounded-0 font_white_color py-3 pl-4 card_header"
                >
                  <p>{t("titulosDeGrado")}</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      <li>
                        <p>▸ {t("grado1")}</p>
                      </li>
                      <li>
                        <p>▸ {t("grado2")}</p>
                      </li>
                      <li>
                        <p>▸ {t("grado3")}</p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="rounded-0">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="1"
                  className="background_secondary_color rounded-0 font_white_color py-3 pl-4 card_header"
                >
                  <p>{t("titulosDePosgrado")}</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      <li>
                        <p>▸ {t("posgrado1")}</p>
                      </li>
                      <li>
                        <p>▸ {t("posgrado2")}</p>
                      </li>
                      <li>
                        <p>▸ {t("posgrado3")}</p>
                      </li>
                      <li>
                        <p>▸ {t("posgrado4")}</p>
                      </li>
                      <li>
                        <p>▸ {t("posgrado5")}</p>
                      </li>
                      <li>
                        <p>▸ {t("posgrado6")}</p>
                      </li>
                      <li>
                        <p>▸ {t("posgrado7")}</p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="rounded-0">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="2"
                  className="background_secondary_color rounded-0 font_white_color py-3 pl-4 card_header"
                >
                  <p>{t("congresos")}</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul>
                      <li>
                        <p>▸ {t("congreso1")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso2")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso3")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso4")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso5")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso6")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso7")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso8")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso9")}</p>
                      </li>
                      <li>
                        <p>▸ {t("congreso10")}</p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="rounded-0">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="3"
                  className="background_secondary_color rounded-0 font_white_color py-3 pl-4 card_header"
                >
                  <p>{t("membresias")}</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul>
                      <li>
                        <p>▸ {t("membresia1")}</p>
                      </li>
                      <li>
                        <p>▸ {t("membresia2")}</p>
                      </li>
                      <li>
                        <p>▸ {t("membresia3")}</p>
                      </li>
                      <li>
                        <p>▸ {t("membresia4")}</p>
                      </li>
                      <li>
                        <p>▸ {t("membresia5")}</p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="rounded-0">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="4"
                  className="background_secondary_color rounded-0 font_white_color py-3 pl-4 card_header"
                >
                  <p>{t("habilitaciones")}</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <ul>
                      <li>
                        <p>▸ {t("habilitacion1")}</p>
                      </li>
                      <li>
                        <p>▸ {t("habilitacion2")}</p>
                      </li>
                      <li>
                        <p>▸ {t("habilitacion3")}</p>
                      </li>
                      <li>
                        <p>▸ {t("habilitacion4")}</p>
                      </li>
                      <li>
                        <p>▸ {t("habilitacion5")}</p>
                      </li>
                      <li>
                        <p>▸ {t("habilitacion6")}</p>
                      </li>
                      <li>
                        <p>▸ {t("habilitacion7")}</p>
                      </li>
                      <li>
                        <p>▸ {t("habilitacion8")}</p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="rounded-0">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="5"
                  className="background_secondary_color rounded-0 font_white_color py-3 pl-4 card_header"
                >
                  <p>{t("entrenamientos")}</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <ul>
                      <li>
                        <p>▸ {t("entrenamiento1")}</p>
                      </li>
                      <li>
                        <p>▸ {t("entrenamiento2")}</p>
                      </li>
                      <li>
                        <p>▸ {t("entrenamiento3")}</p>
                      </li>
                      <li>
                        <p>▸ {t("entrenamiento4")}</p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}
